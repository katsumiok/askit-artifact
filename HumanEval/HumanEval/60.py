from typing import List
from pyaskit import defun_hinted, define_hinted

sum_to_n = defun_hinted(
    int,
    {'n': int},
    """
    sum_to_n is a function that sums numbers from 1 to {{n}}.
    """,
    training_examples=[
        {"input": {"n": 30}, "output": 465},
        {"input": {"n": 100}, "output": 5050},
        {"input": {"n": 5}, "output": 15},
        {"input": {"n": 10}, "output": 55},
        {"input": {"n": 1}, "output": 1}]
    ).compile(
        test_examples=[
            {"input": {"n": 1}, "output": 1},
            {"input": {"n": 6}, "output": 21},
            {"input": {"n": 11}, "output": 66},
            {"input": {"n": 30}, "output": 465},
            {"input": {"n": 100}, "output": 5050},
        ]
    )
