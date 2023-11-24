from typing import List
from pyaskit import defun_hinted, define_hinted

prime_fib = defun_hinted(
    int,
    {'n': int},
    """
    Returns {{n}}-th number that is a Fibonacci number and it's also prime.
    """,
    training_examples=[
        {"input": {"n": 1}, "output": 2},
        {"input": {"n": 2}, "output": 3},
        {"input": {"n": 3}, "output": 5},
        {"input": {"n": 4}, "output": 13},
        {"input": {"n": 5}, "output": 89}]
    ).compile(
        test_examples=[
            {"input": {"n": 1}, "output": 2},
            {"input": {"n": 2}, "output": 3},
            {"input": {"n": 3}, "output": 5},
            {"input": {"n": 4}, "output": 13},
            {"input": {"n": 5}, "output": 89},
            {"input": {"n": 6}, "output": 233},
            {"input": {"n": 7}, "output": 1597},
            {"input": {"n": 8}, "output": 28657},
            {"input": {"n": 9}, "output": 514229},
            {"input": {"n": 10}, "output": 433494437},
        ]
    )
