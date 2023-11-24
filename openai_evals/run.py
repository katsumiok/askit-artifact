from collections import defaultdict
import sys
import json
import glob
import pyaskit as ai
import pyaskit.types as t
import os
import re
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# get the directory of this script
root = os.path.dirname(os.path.realpath(__file__))


def normalize(input):
    if not isinstance(input, list):
        input = [{"role": "user", "content": input}]
    return input


def run(json_files, i):
    with open(json_files[i]) as f:
        data = json.load(f)
    type = data["example"]["output"]
    try:
        return_type = eval(type)
        input = normalize(data["example"]["input"])
        x = ai.chat_raw(return_type, input)
        print(f"Success: {i} {data['id']}")
        return True
    except Exception as e:
        print(f"Error in {json_files[i]}: {e}")
        print(f"Failure: {i} {data['id']}")
        return False


def main():
    json_files = sorted(glob.glob(f"{root}/data/*.json"))
    error_count = 0
    for i in range(50):
        success = run(json_files, i)
        if not success:
            error_count += 1
    print(f"Errors: {error_count}")


if __name__ == "__main__":
    main()
