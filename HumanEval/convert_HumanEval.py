import json
import ast
import re
import subprocess
from pyaskit import define_hinted


training_examples = []
with open('HumanEval.jsonl') as f:
    lines = f.readlines()
for line in lines:
    data = json.loads(line)
    id = data["task_id"]
    if id in {"HumanEval/13", "HumanEval/32", "HumanEval/51", "HumanEval/3"}:
        input = {"prompt": data["prompt"], "test": data["test"]}
        with open(id + ".py") as f:
            output = f.read()
        example = {"input": input, "output": output}
        training_examples.append(example)
        

convert = define_hinted(str,
                 """Convert {{prompt}} and {{test}} into a Python program.
                 Use 'define_hinted(return_type, prompt, training_examples)' to define a function with a return type.
                 Use 'defun_hinted(return_type, parameter_types, prompt, traning_examples)' to specify the types of the parameters in addition to the return type.
                 Parameters in the prompt should be surrounded by double curly braces.
                 Move few-shot examples in {{prompt}} to the training_examples list from original {{prompt}}.
                 Do not remain any few-shot examples in the prompt passed to define_hinted/defun_hinted.
                 Move the test cases to the test_examples list if possible.
                 """,
                 training_examples)

def make_prompt(s, param_names):
    for name in param_names:
        pattern = f'(?<!")(?<!\w){name}(?!\w)'
        s = re.sub(pattern, f'{{{{{name}}}}}', s)
    return s


def make_def(name, return_type, params, prompt):
    if params:
        param_str = '{' + ", ".join([f"'{key}': {value}" for key, value in params.items()]) + '}'
        return f"""{name} = defun_hinted(
    {return_type},
    {param_str},
    {prompt})"""
    else:
        return f"""{name} = define_hinted(
    {return_type},
    {prompt})"""


with open("human.txt", "r") as f:
    lines = f.readlines()
ids = {line.strip() for line in lines}
print(ids)

with open('HumanEval.jsonl') as f:
    lines = f.readlines()
    for line in lines:
        data = json.loads(line)
        id = data["task_id"]
        if id not in ids:
            continue
        python_code = data["prompt"].strip()
        lines = python_code.split("\n")
        sig = lines[0].split(' ')[1]
        entry = data["entry_point"]
#        print("-----")
#        print(python_code)
        parsed = ast.parse(python_code)
        get_imports = lambda parsed: [node for node in ast.walk(parsed) if isinstance(node, ast.Import)]
        imports = get_imports(parsed)
        imports_stmts = [ast.get_source_segment(python_code, imp) for imp in imports]
        get_defs = lambda parsed: [node for node in ast.walk(parsed) if isinstance(node, ast.FunctionDef)]
        defs = get_defs(parsed)
        s = ""
        def_stmts = []
        for d in defs:
            for _ in range(3):
                # check if the last statement is a string literal
                if isinstance(d.body[-1], ast.Expr) and isinstance(d.body[-1].value, ast.Str):
                    return_type = ast.get_source_segment(python_code, d.returns)
                    parameters = d.args.args
                    params = {}
                    param_names = []
                    for p in parameters:
                        param_names.append(p.arg)
                        param_type = p.annotation
                        if param_type:
                            params[p.arg] = ast.get_source_segment(python_code, param_type)
                    code_text = ast.get_source_segment(python_code, d.body[-1])
                    prompt = make_prompt(code_text, param_names)
                    def_stmt = make_def(d.name, return_type, params, prompt)
                    def_stmts.append(def_stmt)
                else:
                    code_text = ast.get_source_segment(python_code, d)
                    def_stmts.append(code_text)
                code = convert(prompt=data["prompt"], test=data["test"])
                print(code)
                with open(f'tmp/{id}.py', 'w') as f:
                    f.write(code)
                # execute the program
                result = subprocess.run(['python', f'tmp/{id}.py'], stdout=subprocess.PIPE)
                output = result.stdout.decode('utf-8')
                err = result.stderr
                # check if successful
                if result.returncode != 0:
                    print(f'Error: {id}')
                    print(output)
                    print(err)
                    continue
                else:
                    print(f'Success: {id}')
                    ids.remove(id)
                    with open("human.txt", "w") as f:
                        f.write("\n".join(ids))
                    break
            


        get_string_literal = lambda defs: [node for node in ast.walk(parsed) if isinstance(node, ast.Str)]
        for d in defs:
            string_literals = get_string_literal(d)
            if len(string_literals) > 1:
                pass
#        print(len(defs))

#        if not sig.startswith(entry):
#            print(entry)
#            print(prompt)
#        print("=======")
#        print(data["test"])
