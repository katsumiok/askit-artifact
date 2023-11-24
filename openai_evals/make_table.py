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


def convert_type(x):
    return {
        "dict": "object",
        "list": "Array",
        "int": "number",
        "str": "string",
        "float": "number",
        "bool": "boolean",
        "literal": "literal",
        "number": "number",
        "union": "union",
    }[x]


def get_prompt_length(xs):
    if not isinstance(xs, list):
        xs = [{"content": xs}]
    sum = 0
    for x in xs:
        sum += len(x["content"])
    return sum


def make_graph(counts, countsTop, filename):
    # Sort keys
    keys = sorted(set(list(counts.keys()) + list(countsTop.keys())))

    # Prepare data
    counts_1 = [counts.get(key, 0) for key in keys]
    counts_2 = [countsTop.get(key, 0) for key in keys]

    # Create bar chart
    x = np.arange(len(keys))  # the label locations
    width = 0.35  # the width of the bars

    # Colorblind-friendly colors
    colors = ["#377eb8", "#ff7f00"]

    # fig, ax = plt.subplots()
    fig, ax = plt.subplots(figsize=(6.4, 2.4))  # Default is figsize=(6.4, 4.8)
    rects1 = ax.bar(x - width / 2, counts_1, width, label="All types", color=colors[0])
    rects2 = ax.bar(
        x + width / 2, counts_2, width, label="Top level types", color=colors[1]
    )

    # Add some text for labels and custom x-axis tick labels, etc.
    ax.set_ylabel("Counts")
    ax.set_xticks(x)
    # ax.set_xticklabels([convert_type(key[2:]) for key in keys], rotation=45, ha='right')
    ax.set_xticklabels(
        [r"\texttt{" + convert_type(key[2:]) + "}" for key in keys],
        rotation=45,
        ha="right",
    )
    ax.legend()
    ax.grid(True)
    fig.tight_layout()

    plt.savefig(filename, dpi=300)


def make_table(table_data, filename):
    def texttt_formatter(value):
        return r"\texttt{" + str(value) + "}"

    def identity_formatter(value):
        return value

    df = pd.DataFrame(table_data)
    latex_code = df.to_latex(
        index=False,
        escape=True,
        float_format="%.2f",
        formatters=[
            identity_formatter,
            texttt_formatter,
            identity_formatter,
            identity_formatter,
            identity_formatter,
        ],
    )

    # average reduction
    print(f"Average reduction: {np.mean(df['Percentage Reduction']):.2f}%")

    with open(filename, "w") as f:
        f.write(latex_code)


def analyze(run=False):
    counts = defaultdict(int)
    countsTop = defaultdict(int)
    diffs = []
    table_data = []
    org_lengths = []
    new_lengths = []
    count = 1
    # list json files in data
    json_files = glob.glob(f"{root}/data/*.json")
    for filename in sorted(json_files):
        with open(filename) as f:
            data = json.load(f)
        type = data["example"]["output"]
        with open(f"{root}/odata/" + data["id"] + ".json", "r") as f:
            odata = json.load(f)
        if data["checked"]:
            org_length = get_prompt_length(odata["example"]["input"])
            new_length = get_prompt_length(data["example"]["input"])
            org_lengths.append(org_length)
            new_lengths.append(new_length)
            diff = org_length - new_length
            diffs.append(diff)

            types = re.findall(r"t\.\w+", type)
            for type in types:
                if type == "t.float" or type == "t.int":  # XXX
                    type = "t.number"
                counts[type] += 1
            rootType = types[0]
            if rootType == "t.literal":
                rootType = "t.union"
            if rootType == "t.float" or rootType == "t.int":  # XXX
                rootType = "t.number"
            countsTop[rootType] += 1

            # print(rootType)
            table_data.append(
                {
                    "Benchmark ID": data["id"],
                    "Return Type": convert_type(rootType[2:]),
                    "Original Length": org_lengths[-1],
                    "Reduced Length": new_lengths[-1],
                    #            'Absolute Reduction': diff,
                    "Percentage Reduction": diff / org_lengths[-1] * 100,
                }
            )

            count += 1
            if count >= 50:
                break
            if run:
                try:
                    return_type = eval(type)
                    print("Running", filename)
                    x = ai.chat_raw(return_type, data["example"]["input"])
                    print(x)
                except Exception as e:
                    print(f"Error in {filename}: {e}")
                    continue

    print(np.mean(diffs))

    return counts, countsTop, table_data


def make_histogram(data, filename):
    df = pd.DataFrame(data)
    df["Reduction"] = df["Original Length"] - df["Reduced Length"]
    df["Reduction"].hist(bins=10)
    plt.xlabel("Reduction in prompt length (characters)", fontsize=14)
    plt.ylabel("Counts", fontsize=14)
    plt.xticks(fontsize=14)
    plt.yticks(fontsize=14)

    # Get the current figure and its size
    fig = plt.gcf()
    default_size = fig.get_size_inches()
    # Set the height to half of the default
    fig.set_size_inches(default_size[0], default_size[1] / 2.5)
    plt.subplots_adjust(bottom=0.27)
    plt.grid(True)
    plt.savefig(filename, dpi=300)
    # plt.show()


def main():
    if len(sys.argv) != 4:
        print(f"Usage: python {sys.argv[0]} <table_file> <graph_file> <hist_file>")
        exit()
    table_file, graph_file, hist_file = sys.argv[1:]
    counts, countsTop, table_data = analyze()
    # print(counts)
    # print(countsTop)
    # This ensures that Matplotlib uses LaTeX to render text in the plot
    plt.rc("text", usetex=True)
    # General font setting
    plt.rc("font", family="serif")
    make_histogram(table_data, hist_file)
    make_graph(counts, countsTop, graph_file)
    make_table(table_data, table_file)


if __name__ == "__main__":
    main()
