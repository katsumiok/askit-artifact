from typing import List
from pyaskit import defun_hinted, define_hinted

fib = defun_hinted(
    int,
    {'n': int},
    """
    Return n-th Fibonacci number where {{n}} is an integer.
    """,
    training_examples=[
        {"input": {"n": 10}, "output": 55},
        {"input": {"n": 1}, "output": 1},
        {"input": {"n": 8}, "output": 21}]
    ).compile(
        test_examples=[
            {"input": {"n": 10}, "output": 55},
            {"input": {"n": 1}, "output": 1},
            {"input": {"n": 8}, "output": 21},
            {"input": {"n": 11}, "output": 89},
            {"input": {"n": 12}, "output": 144}]
    )
