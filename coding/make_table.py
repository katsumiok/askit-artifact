import re
import json
import os
import sys
from pyaskit import generate_unique_function_name

root = os.path.dirname(os.path.realpath(__file__))

jsons = []
with open(f"{root}/ts-askit/examples/src/askit/top50def.ts.jsonl") as f:
    lines = f.readlines()
for line in lines:
    data = json.loads(line)
    jsons.append(data)


# extract
def extract_task(lines):
    all = " ".join(lines)
    m = re.match(r".*define<(.*?),(.*)>\('(.*?)'", all, re.DOTALL)
    if m:
        return m.group(3).strip(), m.group(1).strip(), m.group(2).strip()


def extract_args(lines):
    all = " ".join(lines)
    m = re.match(r"function.*?\((.*?)\)", all, re.DOTALL)
    if m:
        return m.group(1).strip()


def get_retry(lines):
    m = re.match(r".*(\w+).*", lines[0])
    retry = m[1]
    return retry


def get_loc(i):
    path = f'{root}/ts-askit/examples/src/askit/{jsons[i]["name"]}.ts'
    with open(path) as f:
        lines = f.readlines()
    # remove comments and blanc lines
    retry = get_retry(lines)
    lines = remove_comments(lines)

    name = generate_unique_function_name(jsons[i]["desc"])
    filename = f"{root}/pyaskit/examples/askit/{name}.py"
    # check if file exists
    try:
        with open(filename) as f:
            py_lines = f.readlines()
        py_retry = get_retry(py_lines)
        py_lines = remove_comments(py_lines)
    except FileNotFoundError:
        py_retry = 0
        py_lines = []

        pass

    return len(lines), retry, len(py_lines), py_retry


def remove_comments(lines):
    lines = [line for line in lines if not line.strip().startswith("//")]
    lines = [line for line in lines if not line.strip() == ""]
    return lines


def make_template(desc):
    # replace '...' with {{...}}
    desc = re.sub(r"'(.*?)'", "{{\\1}}", desc)
    return desc


def analyze():
    # open top50.ts
    with open(f"{root}/ts-askit/examples/src/top50def.ts") as f:
        lines = f.readlines()

    funcs = []
    func = None
    for line in lines:
        line = line.strip()
        if line.startswith("//"):
            func = {"name": line[2:].strip(), "lines": []}
        elif line == "":
            if func:
                funcs.append(func)
                func = None
        else:
            if func:
                func["lines"].append(line)
    if func:
        funcs.append(func)
    return funcs


def make_table(funcs, interesting, dstfile):
    rows = []
    total_loc = 0
    locsPy = []
    for i, func in enumerate(funcs):
        loc, retry, locPy, retryPy = get_loc(i)
        total_loc += loc
        locsPy.append(locPy)
        desc = func["name"]
        print(func)

        prompt, ret_type, arg_type = extract_task(func["lines"])
        args = extract_args(func["lines"])
        row = f"""{i+1} &
    \\begin{{lstlisting}}
    {prompt}
    \\end{{lstlisting}}
    &
    \\begin{{lstlisting}}
    {ret_type}
    \\end{{lstlisting}}
    &
    \\begin{{lstlisting}}
    {arg_type}
    \\end{{lstlisting}}
    & {loc}
    & {retry}
    & {locsPy[i]}
    & {retryPy}
    """
        if i + 1 in interesting:
            rows.append(row)

    body = "\\\\ \n".join(rows)

    with open(dstfile, "w") as f:
        # with open("table.tex", "w") as f:
        f.write(body)
    print(total_loc)
    print(total_loc / len(funcs))
    print(sum(locsPy))
    print(sum(locsPy) / len(locsPy))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <filename>")
        sys.exit(1)
    filename = sys.argv[1]
    funcs = analyze()
    interesting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 21, 24]
    make_table(funcs, interesting, filename)
