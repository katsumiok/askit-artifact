import sys
import os
import json
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


root = os.path.dirname(os.path.realpath(__file__))


# count lines without comments and empty lines
def count_lines(s):
    lines = s.split("\n")
    count = 0
    for line in lines:
        if line.strip() == "":
            continue
        if line.strip().startswith("#"):
            continue
        count += 1
    return count


def remove_doc_str(s):
    lines = reversed(s.split("\n"))
    ret = []

    start = False
    for line in lines:
        if line.strip().startswith("def"):
            start = True
        if start:
            ret.append(line)
    return "\n".join(reversed(ret)) + "\n"


def analyze():
    data_summary = []

    with open(f"{root}/HumanEval.jsonl") as f:
        lines = f.readlines()

    count = 0
    for line in lines:
        data = json.loads(line)
        id = data["task_id"]
        prompt = data["prompt"]
        solution = data["canonical_solution"]
        code = remove_doc_str(prompt) + solution
        loc = count_lines(code)

        with open(f"{root}/{id}.py") as f:
            askit_code = f.read()
            askit_loc = count_lines(askit_code)

        with open(f"{root}/json/{id}.json") as f:
            data = json.load(f)
        if data["result"] == "Failed":
            continue
        if "file" not in data:
            continue
        with open(root + os.sep + data["file"]) as f:
            code2 = f.read()
        loc2 = count_lines(code2)

        if loc2 < loc:
            count += 1

        data_summary.append(
            {
                "Task ID": id,
                "Original LOC": loc,
                "Processed LOC": loc2,
                "ASKIT LOC": askit_loc,
                "Ratio": loc2 / askit_loc,
            }
        )

    # Convert to DataFrame for easier manipulation
    df = pd.DataFrame(data_summary)

    print(df.describe())
    percentage = count / len(df) * 100
    print(f"ASKIT generated {count} shorter codes.")
    print(f"This is {percentage}% of the total {len(df)} tasks.")

    # Calculate the ratio of processed (generated) LOC to original (hand-written) LOC
    df["LOC Ratio"] = df["Processed LOC"] / (df["Original LOC"])

    return df


def make_graph(df, filename):
    # Enabling TeX rendering
    plt.rc("text", usetex=True)
    # General font setting
    plt.rc("font", family="serif")

    plt.figure(figsize=(12, 8))

    # Adjusting marker size based on the ratio (scaled for better visibility)
    marker_size = np.abs(df["LOC Ratio"] - 1) * 200

    plt.scatter(df["Original LOC"], df["Processed LOC"], alpha=0.7, s=marker_size)

    plt.xlabel(r"Hand-Written Lines of Code", fontsize=40)
    plt.ylabel(r"Generated Lines of Code", fontsize=40)
    plt.xticks(fontsize=40)
    plt.yticks(fontsize=40)

    plt.grid(True)
    plt.tight_layout()  # Adjusts the plot to fit into the figure area.

    # save the plot as a PDF file
    plt.savefig(filename)


def make_table(df, filename):
    # Calculate statistics
    stats = {
        "Metric": ["Average", "Median", "Minimum", "Maximum"],
        "Original LOC": [
            df["Original LOC"].mean(),
            df["Original LOC"].median(),
            df["Original LOC"].min(),
            df["Original LOC"].max(),
        ],
        "Processed LOC": [
            df["Processed LOC"].mean(),
            df["Processed LOC"].median(),
            df["Processed LOC"].min(),
            df["Processed LOC"].max(),
        ],
        "LOC Ratio": [
            df["LOC Ratio"].mean(),
            df["LOC Ratio"].median(),
            df["LOC Ratio"].min(),
            df["LOC Ratio"].max(),
        ],
    }

    stats_df = pd.DataFrame(stats)

    # Function to convert a DataFrame to a LaTeX table
    def df_to_latex(df, filename):
        latex_table = df.to_latex(index=False, header=True, float_format="%.2f")
        with open(filename, "w") as file:
            file.write(latex_table)

    # Generate LaTeX table for the statistics
    df_to_latex(stats_df, filename)


if __name__ == "__main__":
    graph_filename = sys.argv[1]
    table_filename = sys.argv[2]
    df = analyze()
    make_graph(df, graph_filename)
    make_table(df, table_filename)
