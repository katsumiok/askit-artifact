import os
import yaml
import json
import pyaskit as ai
import pyaskit.types as t
import redis
import re

r = redis.Redis(host="localhost", port=6379, db=0)

examples = [
    # String
    {
        "input": {
            "messages": [
                {
                    "role": "system",
                    "content": "Convert mathematical expression to reverse polish notation. Do not provide any explanation or commentary, output the result only.",
                },
                {"role": "user", "content": "Mathematical expression: 1 + 1"},
            ]
        },
        "output": "t.str",
    },
    # Bool
    {
        "input": {
            "messages": [
                {"role": "system", "content": "You are a helpful assistant."},
                {
                    "role": "user",
                    "content": "Was Abraham Lincoln born before Franklin Pierce? Answer Y or N.",
                },
            ]
        },
        "output": "t.bool",
    },
    # List
    {
        "input": {
            "messages": [
                {
                    "role": "system",
                    "content": "Please sort the following comma-separated numbers in a descending order, ignoring any formatting. Return just a comma-separated list of numbers as well.",
                },
                {"role": "user", "content": "1,2,3,4,5"},
            ]
        },
        "output": "t.list(t.float)",
    },
    # Union
    {
        "input": {
            "messages": [
                {
                    "role": "system",
                    "content": 'A sequence of numbers with one blank(__) as a question, and four options as possible answers will be given, try to find the pattern of the sequence of numbers, then choose the most suitable one as your answer to fill the blank, user will use latex if necessary. Your reply will only have one letter either "(A)", "(B)", "[C]", or "{D}", without explanation.',
                },
                {
                    "role": "user",
                    "content": "\\sqrt{2},4,6\\sqrt{2},16,20\\sqrt{2},__\nA、32\nB、48\nC、64\nD、72",
                },
            ]
        },
        "output": "t.union(t.literal('A'), t.literal('B'), t.literal('C'), t.literal('D'))",
    },
    # Tuple
    {
        "input": {
            "messages": [
                {
                    "role": "system",
                    "content": "Please note: In the following EXERCISE, it is important that you only respond with a single line in the format (x, y). Imagine you are standing in a 2D coordinate grid at (0, 0) where coordinates are represented like (x, y). You are currently facing the positive y direction.",
                },
                {
                    "role": "user",
                    "content": "EXERCISE: If you take 5 steps forward, then turn 90 degrees left, then take 2 steps forward, then turn 90 degrees left, then take 1 step backward, then turn 90 degrees left, then take two steps backward, what coordinate are you at?",
                },
            ]
        },
        "output": 't.dict({"x": t.int, "y": t.int})',
    },
]


convert = ai.define(
    t.union(t.str, t.literal("N/A")),
    """
What is the type of the response from GPT to the {{messages}}.
Possible types are:
- t.int
- t.float
- t.bool
- t.str
- t.union
- t.list
- t.literal
- t.dict
and combinations of them.

Obay the following rules:
- If the possible response is yes or no, Yes or No, Y or N, and YES or NO, answer not t.union but t.bool.
- t.literal must be always used with t.union.
- Single t.literal should not be an answer.
""",
    training_examples=examples[1:],
)


def get_all_files(path):
    """Get all files in a directory with yield."""
    for root, dirs, files in os.walk(path):
        for file in files:
            yield os.path.join(root, file)


def get_all_yaml_files(path):
    """Get all yaml files in a directory with yield."""
    for file in get_all_files(path):
        if file.endswith(".yaml"):
            yield file


def get_jsonl(filename):
    # load yaml
    with open(filename, "r") as file:
        yaml_data = yaml.load(file, Loader=yaml.FullLoader)
    jsonl = None
    id = None
    for key in yaml_data:
        if "args" in yaml_data[key]:
            if "samples_jsonl" in yaml_data[key]["args"]:
                jsonl = yaml_data[key]["args"]["samples_jsonl"]
        if "id" in yaml_data[key]:
            id = yaml_data[key]["id"]
    return id, jsonl


def get_all_jsonl_files(path):
    yamls = get_all_yaml_files("openai/evals/evals/registry/evals")
    for filename in yamls:
        id, jsonl = get_jsonl(filename)
        if jsonl is None:
            print(f"Could not find jsonl for {filename}")
            continue
        yield id, "openai/evals/evals/registry/data/" + jsonl


def process_jsonl(jsonl):
    with open(jsonl) as f:
        for line in f:
            data = json.loads(line)
            if "input" in data:
                return data["input"], data["ideal"] if "ideal" in data else None
    return None, None


def find():
    for id, jsonl in get_all_jsonl_files("openai/evals/evals/registry/evals"):
        example, ideal = process_jsonl(jsonl)
        if example is not None:
            yield id, example, ideal


for id, example, ideal in find():
    input = example
    s = r.get(id)
    if False:
        output = convert(example)
        print(output)
        r.set(id, json.dumps({"id": id, "example": {"input": input, "output": output}}))
    else:
        data = json.loads(s)
        # data = {**data, "ideal": ideal, "checked": False}
        # r.set(id, json.dumps(data))
        # x = re.findall(r"literal", data["example"]["output"])
        # if len(x) == 1:
        #    print(data, ideal)
#        with open("data/" + id + ".json", "w") as f:
#            json.dump(data, f)


# list all yaml files in the openai/evals/evals/registry/evals directory


# for each yaml file, create a doit task
