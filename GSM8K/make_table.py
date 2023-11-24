import glob
import json
import sys
import pandas as pd
import os

# get directory path of this file
root = os.path.dirname(os.path.realpath(__file__))


def analyze_json():
    py_success_count = 0
    ts_success_count = 0

    # Initialize an empty list to store all data
    data_list = []
    data_list2 = []
    # Open json files in 'json' directory
    for i in range(1319):
        filename = f"{root}/python/json/{i}.json"
        # check if the file exists
        if glob.glob(filename) == []:
            continue
        with open(filename) as f:
            data = json.load(f)
        # Extract data
        #        errorCount = len(data["errors"])
        llm_time = data["llm_time"]
        jit_time = data["jit_time"] * 1000 * 1000
        compile_time = data["compile_time"]
        compile_count = data["recompilation_count"]
        result = data["result"]

        if result == "Success":
            py_success_count += 1
        if result == "Success" and compile_time != 0:
            # Append data to list
            data_list.append(
                {
                    "File": filename,
                    "result": result,
                    #                    "Retry Count": errorCount,
                    "Latency [s]": llm_time,
                    "Execution Time [us]": jit_time,
                    "Compilation Time [s]": compile_time,
                    "Recompilation Count": compile_count,
                    "Speedup": (llm_time * 1000 * 1000) / jit_time,
                },
            )

        filename = f"{root}/ts/json/{i}.json"
        # check if filename exists
        if glob.glob(filename) == []:
            continue
        with open(filename) as f:
            data = json.load(f)
        llm_time = data["llm_time"] / 1000 / 1000 / 1000
        result = data["result"]
        #        errorCount = len(data["errors"])
        filename = f"{root}/ts/src2/askit/{i}.ts.jsonl.log"
        # check if filename exists
        if glob.glob(filename):
            with open(filename) as f:
                data = json.load(f)
            compile_time = data["elapsed"]
            compile_count = data["count"]
        else:
            compile_time = 0
            compile_count = 0
        filename = f"{root}/ts/json2/{i}.json"
        if glob.glob(filename):
            with open(filename) as f:
                data = json.load(f)
            jit_time = data["llm_time"] / 1000
            if jit_time == 0:
                exit()
        else:
            jit_time = 0
        # print(compile_time, compile_count, jit_time)
        if result == "Success":
            ts_success_count += 1
        if result == "Success" and compile_time != 0:
            data_list2.append(
                {
                    "File": filename,
                    "result": result,
                    #                    "Retry Count": errorCount,
                    "Latency [s]": llm_time,
                    "Execution Time [us]": jit_time,
                    "Compilation Time [s]": compile_time,
                    "Recompilation Count": compile_count,
                    "Speedup": (llm_time * 1000 * 1000) / jit_time,
                },
            )
    print("Python success rate:", py_success_count / 1319, py_success_count)
    print("TypeScript success rate:", ts_success_count / 1319, ts_success_count)
    return data_list, data_list2


def make_table(data_list, data_list2, filename):
    data = {
        "Average Metrics": [
            "Latency (s)",
            "Execution Time (\si{\micro\second})",
            "Compilation Time (s)",
            "Speedup Ratio",
        ],
    }
    for data_list, lang in [(data_list2, "TypeScript"), (data_list, "Python")]:
        df = pd.DataFrame(data_list)
        stats_df = df.describe()
        data[lang] = [
            stats_df.loc["mean", "Latency [s]"],
            stats_df.loc["mean", "Execution Time [us]"],
            stats_df.loc["mean", "Compilation Time [s]"],
            stats_df.loc["mean", "Speedup"],
        ]
    df = pd.DataFrame(data)
    df.set_index("Average Metrics", inplace=True)
    with open(filename, "w") as tf:
        tf.write(df.to_latex(escape=False, float_format="%.2f"))
        print(f"LaTeX table saved as {filename}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f"Usage: python {sys.argv[0]} <filename>")
        exit()
    filename = sys.argv[1]
    data_list, data_list2 = analyze_json()
    make_table(data_list, data_list2, filename)
