import importlib
import json
import sys
import ast
import re
from pyaskit import define_hinted
import subprocess
import glob
import os

# add "HumanEval" to the path
sys.path.append("HumanEval")

training_examples = []
with open("HumanEval.jsonl") as f:
    lines = f.readlines()
for line in lines:
    data = json.loads(line)
    id = data["task_id"]
    # check if id.json exists in json/
    if os.path.exists(f"json/{id}.json"):
        continue
    data = {"id": id}
    # get *.py files in askit

    existing_files = set(glob.glob("askit/*.py"))
    try:
        module = importlib.import_module(id[len("HumanEval/") :])
        # check if the module has a function called "check"
        if hasattr(module, "check"):
            check = getattr(module, "check")
            entry = getattr(module, data["entry_point"])
            check(entry)
        data["result"] = "Success"
    except Exception as e:
        data["result"] = "Failed"
        data["error"] = str(e)
    files = set(glob.glob("askit/*.py"))
    diff = files - existing_files
    if diff:
        data["file"] = diff.pop()
    filename = f"json/{id}.json"
    dirname = os.path.dirname(filename)
    os.makedirs(dirname, exist_ok=True)
    with open(filename, "w") as f:
        json.dump(data, f)
