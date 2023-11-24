from pyaskit import defun_hinted, define_hinted

get_max_triples = defun_hinted(
    int,
    {'n': int},
    """You are given a positive integer {{n}}. You have to create an integer array a of length {{n}}. For each i (1 ≤ i ≤ {{n}}), the value of a[i] = i * i - i + 1. Return the number of triples (a[i], a[j], a[k]) of a where i < j < k, and a[i] + a[j] + a[k] is a multiple of 3.\nInput: {{n}} = 5\nOutput: 1\nExplanation:\na = [1, 3, 7, 13, 21] The only valid triple is (1, 7, 13).""",
    []
    ).compile(
        test_examples=[
            {"input": {"n": 5}, "output": 1},
            {"input": {"n": 6}, "output": 4},
            {"input": {"n": 10}, "output": 36},
            {"input": {"n": 100}, "output": 53361}
        ]
    )