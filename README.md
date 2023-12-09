
# Artifact for CGO'24 Paper: 'AskIt: Unified Programming Interface for Programming with Large Language Models'

## Abstract

The appendix is designed to facilitate the replication of experiments conducted in this paper. It includes a Docker container, complemented by a set of scripts, to seamlessly replicate the results shown in Figure 5, Figure 6, and Figure 7, as well as the data presented in Table II and Table III.

## Artifact check-list (meta-information)

- **Data set**: HumanEval, OpenAI Evals, GSM8K
- **Run-time environment**: Any operating system that supports Docker
- **Hardware**: Any machine with Docker installed
- **Metrics**: Lines of code, reduction in prompt length, speedup
- **Output**: Figure 5, Figure 6, Figure 7, Table II, Table III
- **Disk space required (approximately)**: 5GB
- **Time needed to prepare workflow (approximately)**: 15 minutes
- **Time needed to complete experiments (approximately)**: 1 day
- **Publicly available?**: Yes
- **Code licenses (if publicly available)**: MIT License
- **Workflow framework used?**: No, but we provide scripts to reproduce the experiments

## Description

### How delivered

The artifact is available at: [https://github.com/katsumiok/askit-artifact.git](https://github.com/katsumiok/askit-artifact.git)

### Hardware dependencies

No hardware dependencies.

### Software dependencies

The artifact is delivered as a Docker container. The only software dependency is Docker.

### Data sets

The artifact includes the following data sets: HumanEval, OpenAI Evals, GSM8K. These data sets are modified to be compatible with AskIt.

## Installation

1. Clone the artifact from the GitHub repository:

```bash
git clone https://github.com/katsumiok/askit-artifact.git
```

2. Install Docker.
3. Edit `askit-artifact/Dockerfile` to specify an API key for OpenAI API. Replace the line with your API key:

```bash
ENV OPENAI_API_KEY your_api_key_here
```

4. Build a Docker image from the Dockerfile in the artifact directory:

```bash
cd askit-artifact
docker build -t askit .
```

## Experiment workflow

Before running the experiments, start the Docker container:

```bash
docker run -it -v $PWD:/root/docker-artifact askit
```

To reproduce the results shown in Figure 5, Figure 6, Figure 7, Table II, and Table III, run:

```bash
make  
```

To reproduce the experimental results from scratch, remove the intermediate files and then run the experiments:

```bash
make clean_all
./run_all.sh
```

Note: `make` only generates the figures and tables from intermediate files and does not run the experiments.

## Evaluation and expected result

The workflow generates files listed in Table IV. The figures and tables may slightly differ from the ones shown in the paper due to randomness and environmental differences.

## Experiment customization

Scripts for customizing the experiments are listed in Table V. By setting the environment variable `ASKIT_MODEL` in these scripts, you can customize the experiments to use a different model.

### Details of Experiments

- **50 Common Coding Tasks**: Run AskIt on 50 common coding tasks in TypeScript and Python. The source code and the scripts are included in the artifact.
- **HumanEval**: Run AskIt on HumanEval in Python and compare the generated code with hand-written code.
- **OpenAI Evals**: Compare the lengths of the prompts generated by AskIt with original prompts.
- **GSM8K**: Run GSM8K in TypeScript and Python in two settings: with and without code generation.


## Files Generated by the Experiment Workflow

| File                             | Figure/Table         |
|----------------------------------|----------------------|
| `fig/loc.pdf`                     | Figure 5             |
| `fig/prompt_reduction.pdf`        | Figure 6             |
| `fig/type_count.pdf`              | Figure 7             |
| `tab/common_tasks.tex`            | Table II             |
| `tab/gsm8k.tex`                   | Table III            |

## Scripts to Customize the Experiments

| Script                                           | Description                                    | Section               |
|--------------------------------------------------|------------------------------------------------|-----------------------|
| `coding/ts-askit/examples/run.sh`                | Run AskIt on 50 common coding tasks in TypeScript | Section 50 Common Coding Tasks |
| `coding/pyaskit/examples/run.sh`                 | Run AskIt on 50 common coding tasks in Python   | Section 50 Common Coding Tasks |
| `HumanEval/run.sh`                               | Run AskIt on HumanEval in Python                | Section HumanEval    |
| `openai_evals/run.sh`                            | Run AskIt on OpenAI Evals in Python             | Section OpenAI Evals |
| `GSM8K/ts/run.sh`                                | Run AskIt on GSM8K in TypeScript                | Section GSM8K        |
| `GSM8K/python/run.sh`                            | Run AskIt on GSM8K in Python                    | Section GSM8K        |

## Detailed Experiments

### 50 Common Coding Tasks
- Run AskIt on 50 common coding tasks in TypeScript and Python.
- Source code and scripts are included in the artifact.
- Generated code is saved in respective directories for TypeScript and Python.

### HumanEval
- Run AskIt on HumanEval in Python.
- Compare the generated code with hand-written code.
- The tasks and the generated code are saved in specified directories.

### OpenAI Evals
- Compare the lengths of the prompts generated by AskIt with original prompts.
- Check if the responses of the LLMs correspond to the expected types.

### GSM8K
- Run GSM8K in TypeScript and Python in two settings: with and without code generation.
- The tasks, generated code, and metrics are saved in specified directories.
