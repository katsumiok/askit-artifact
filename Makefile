

# from 0.json to 1318.json
GSM8K_PYTHON_FILES := $(wildcard GSM8K/python/json/*.json)
GSM8K_TS_FILES := $(wildcard GSM8K/ts/json/*.json) \
	$(wildcard GSM8K/ts/json2/*.json) \
	$(wildcard GSM8K/ts/src2/*.ts.jsonl.log)

CODING_PYTHON_FILES := $(wildcard coding/pyaskit/examples/askit/*.py)
CODING_TS_FILES := coding/ts-askit/examples/src/askit/top50def.ts.jsonl \
	$(wildcard coding/ts-askit/examples/src/askit/*.ts) \
	coding/ts-askit/examples/src/top50def.ts

HUMANEVAL_FILES := $(wildcard HumanEval/json/HumanEval*.json)

OPENAI_EVALS_FILES := $(wildcard openai_evals/data/*.json)

all: tab/openai_evals.tex fig/type_count.pdf fig/prompt_reduction.pdf tab/common_tasks.tex tab/gsm8k.tex fig/loc.pdf tab/humaneval_stats.tex

tab/gsm8k.tex: directories $(GSM8K_PYTHON_FILES) $(GSM8K_TS_FILES)
	python GSM8K/make_table.py $@

tab/common_tasks.tex: directories $(CODING_PYTHON_FILES) $(CODING_TS_FILES)
	python coding/make_table.py $@

fig/loc.pdf tab/humaneval_stats.tex: directories $(HUMANEVAL_FILES)
	python HumanEval/make_table.py fig/loc.pdf tab/humaneval_stats.tex

tab/openai_evals.tex fig/type_count.pdf fig/prompt_reduction.pdf: directories
	python openai_evals/make_table.py tab/openai_evals.tex fig/type_count.pdf fig/prompt_reduction.pdf


.PHONY: directories

directories: fig tab

fig:
	@mkdir -p fig
tab:
	@mkdir -p tab

.PHONY: clean
clean:
	rm -f tab/* fig/*

.PHONY: clean_all
clean_all: clean
	rm -rf coding/pyaskit/examples/askit
	rm -rf coding/ts-askit/examples/src/askit
	rm -rf coding/ts-askit/examples/dist
	rm -rf HumanEval/json HumanEval/askit
	rm -rf GSM8K/python/askit
	rm -rf GSM8K/ts/src/askit
	rm -rf GSM8K/ts/src2/askit
	rm -rf GSM8K/ts/dist
	rm -rf $(GSM8K_PYTHON_FILES) $(GSM8K_TS_FILES)
	rm -rf $(CODING_PYTHON_FILES) $(CODING_TS_FILES)

check:
	@echo "GSM8K_PYTHON_FILES: $(GSM8K_PYTHON_FILES)"
	@echo "GSM8K_TS_FILES: $(GSM8K_TS_FILES)"
	@echo "CODING_PYTHON_FILES: $(CODING_PYTHON_FILES)"
	@echo "CODING_TS_FILES: $(CODING_TS_FILES)"
	@echo "HUMANEVAL_FILES: $(HUMANEVAL_FILES)"
	@echo "OPENAI_EVALS_FILES: $(OPENAI_EVALS_FILES)"
