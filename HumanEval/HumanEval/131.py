from typing import List
from pyaskit import defun_hinted, define_hinted

digits = define_hinted(
    int,
    """
    Given a positive integer {{n}}, return the product of the odd digits.
    Return 0 if all digits are even.
    """,
    training_examples=[
        {"input": {"n": 1}, "output": 1},
        {"input": {"n": 4}, "output": 0},
        {"input": {"n": 235}, "output": 15}]
    ).compile(
        test_examples=[
            {"input": {"n": 5}, "output": 5},
            {"input": {"n": 54}, "output": 5},
            {"input": {"n": 120}, "output": 1},
            {"input": {"n": 5014}, "output": 5},
            {"input": {"n": 98765}, "output": 315},
            {"input": {"n": 5576543}, "output": 2625},
            {"input": {"n": 2468}, "output": 0},
        ]
    )