from typing import List
from pyaskit import defun_hinted, define_hinted

fizz_buzz = defun_hinted(
    int,
    {'n': int},
    """Return the number of times the digit 7 appears in integers less than {{n}} which are divisible by 11 or 13.
    """,
    training_examples=[
        {"input": {"n": 50}, "output": 0},
        {"input": {"n": 78}, "output": 2},
        {"input": {"n": 79}, "output": 3}]
    ).compile(
        test_examples=[
            {"input": {"n": 50}, "output": 0},
            {"input": {"n": 78}, "output": 2},
            {"input": {"n": 79}, "output": 3},
            {"input": {"n": 100}, "output": 3},
            {"input": {"n": 200}, "output": 6},
            {"input": {"n": 4000}, "output": 192},
            {"input": {"n": 10000}, "output": 639},
            {"input": {"n": 100000}, "output": 8026},]
    )
