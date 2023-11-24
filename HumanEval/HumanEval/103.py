from typing import Union
from pyaskit import defun_hinted, define_hinted

rounded_avg = defun_hinted(
    Union[str, int],
    {'n': int, 'm': int},
    """You are given two positive integers {{n}} and {{m}}, and your task is to compute the
    average of the integers from {{n}} through {{m}} (including {{n}} and {{m}}). 
    Round the answer to the nearest integer and convert that to binary.
    If {{n}} is greater than {{m}}, return -1.
    """,
    training_examples=[
        {"input": {"n": 1, "m": 5}, "output": "0b11"},
        {"input": {"n": 7, "m": 5}, "output": -1},
        {"input": {"n": 10, "m": 20}, "output": "0b1111"},
        {"input": {"n": 20, "m": 33}, "output": "0b11010"}]
    ).compile(
        test_examples=[
            {"input": {"n": 1, "m": 5}, "output": "0b11"},
            {"input": {"n": 7, "m": 13}, "output": "0b1010"},
            {"input": {"n": 964, "m": 977}, "output": "0b1111001010"},
            {"input": {"n": 996, "m": 997}, "output": "0b1111100100"},
            {"input": {"n": 560, "m": 851}, "output": "0b1011000010"},
            {"input": {"n": 185, "m": 546}, "output": "0b101101110"},
            {"input": {"n": 362, "m": 496}, "output": "0b110101101"},
            {"input": {"n": 350, "m": 902}, "output": "0b1001110010"},
            {"input": {"n": 197, "m": 233}, "output": "0b11010111"},
            {"input": {"n": 7, "m": 5}, "output": -1},
            {"input": {"n": 5, "m": 1}, "output": -1},
            {"input": {"n": 5, "m": 5}, "output": "0b101"},
        ]
    )
