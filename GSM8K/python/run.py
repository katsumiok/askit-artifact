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
        return "{{" + var + "}}"

    q = re.sub(r"\s+\d+\s+", replace, question)
    return q, dic


def make_code(id, question, answer):
    filename = "json/" + str(id) + ".json"
    if os.path.exists(filename):
        return

    q, kargs = make_variables(question)
    examples = [{"input": kargs, "output": answer}]

    f = define(t.int, q)

    start = time.perf_counter()
    try:
        y = f(**kargs)
    except Exception:
        y = None
    end = time.perf_counter()
    dic = {}
    dic["llm_time"] = end - start
    dic["compile_time"] = 0
    dic["jit_time"] = 0
    dic["result"] = "Failed"
    if y == answer:
        dic["result"] = "Success"
        print(examples)
        try:
            start = time.perf_counter()
            g = f.compile(test_examples=examples)
            end = time.perf_counter()
            dic["compile_time"] = end - start
            start = time.perf_counter()
            y = g(**kargs)
            end = time.perf_counter()
            dic["jit_time"] = end - start
        except Exception as e:
            dic["compile_time"] = 0
            dic["jit_time"] = 0
            pass
    dic["errors"] = f.errors
    #    dic["completion"] = f.completion
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
with open("../test.jsonl") as f:
    for i, line in enumerate(f):
        data = json.loads(line)
        q = data["question"]
        a = data["answer"]
        reason, answer = a.split("####")
        s = answer.strip()
        s = s.replace(",", "")
        a_value = int(s)
        #        try:
        make_code(i, q, a_value)
#        except Exception as e:
#            print(f"Error in {i}: {e}")
#            continue
