import json
import re
import time
from pyaskit import define
import pyaskit.types as t
import os


def make_variables(question):
    dic = {}
    seq = 0

    def replace(match):
        nonlocal seq
        seq += 1
        var = f"x{seq}"
        dic[var] = int(match.group(0).strip())
        return " {{" + var + "}} "

    q = re.sub(r"\s+\d+\s+", replace, question)
    return q, dic


def make_code(id, question, answer, json_dir, output_dir="ts/src", use_examples=False):
    q, kargs = make_variables(question)
    examples = [{"input": kargs, "output": answer}]
    examples_arg = repr(examples)
    filename = repr(f"{json_dir}/{id}.json")
    paramType = "{" + ", ".join([f"{var}: number" for var, val in kargs.items()]) + "}"
    s = f"""import {{ define, getErrors, getReason, getCompletion }} from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {{
    if (fs.existsSync({filename})) {{
        console.log("Skipping {id}")
        return;
    }}
    // measure time
    const f = define<number, {paramType}>({repr(q)}, [], {examples_arg});
    const start = process.hrtime.bigint();
    let result = null;
    try {{
        result = await f({repr(kargs)});
    }} catch (e) {{
        result = null;        
    }}
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === {answer};
    console.log(ok, getReason());
    const json = JSON.stringify({{
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": {id},
        "question": {repr(question)},
        "answer": {repr(answer)},
        "examples": {repr(examples)},
        }});
    fs.writeFileSync({filename}, json);
}}
doit();
"""

    filename = f"{output_dir}/{id}.ts"
    with open(filename, "w") as f:
        print("Writing", filename)
        f.write(s)

    return 0
    f = define(t.int, q)

    start = time.perf_counter()
    y = f(**kargs)
    end = time.perf_counter()
    dic = {}
    dic["llm_time"] = end - start
    dic["compile_time"] = 0
    dic["jit_time"] = 0
    dic["result"] = "Failed"
    if y == answer:
        dic["result"] = "Success"
        print(examples)
        start = time.perf_counter()
        g = f.compile(test_examples=examples)
        end = time.perf_counter()
        dic["compile_time"] = end - start
        start = time.perf_counter()
        y = g(**kargs)
        end = time.perf_counter()
        dic["jit_time"] = end - start
    dic["errors"] = f.errors
    dic["completion"] = f.completion
    dic["recompilation_count"] = f.recompilation_count
    dic["reason"] = f.reason
    dic["id"] = id
    dic["question"] = question
    dic["answer"] = answer
    dic["examples"] = examples

    # dump to id.json
    with open(filename, "w") as f:
        print("Writing", filename)
        json.dump(dic, f)


# process test.jsonl
with open("test.jsonl") as f:
    for i, line in enumerate(f):
        data = json.loads(line)
        q = data["question"]
        a = data["answer"]
        reason, answer = a.split("####")
        s = answer.strip()
        s = s.replace(",", "")
        a_value = int(s)
        try:
            make_code(
                i, q, a_value, json_dir="json2", output_dir="ts/src2", use_examples=True
            )
            make_code(
                i, q, a_value, json_dir="json", output_dir="ts/src", use_examples=False
            )
        except Exception as e:
            print(f"Error in {i}: {e}")
            continue
