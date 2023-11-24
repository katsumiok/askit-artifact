from typing import List
from pyaskit import defun_hinted, define_hinted

largest_divisor = defun_hinted(
    int,
    {'n': int},
    """ For a given number {{n}}, find the largest number that divides {{n}} evenly, smaller than {{n}} """,
    training_examples=[
        {"input": {"n": 15}, "output": 5}]
    ).compile(
        test_examples=[
            {"input": {"n": 3}, "output": 1},
            {"input": {"n": 7}, "output": 1},
            {"input": {"n": 10}, "output": 5},
            {"input": {"n": 100}, "output": 50},
            {"input": {"n": 49}, "output": 7},
    ]
    )
