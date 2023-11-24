from typing import List
from pyaskit import defun_hinted, define_hinted

skjkasdkd = define_hinted(
    int,
    """You are given a list of integers {{lst}}.
    You need to find the largest prime value and return the sum of its digits.
    """,
    training_examples=[
        {"input": {"lst": [0,3,2,1,3,5,7,4,5,5,5,2,181,32,4,32,3,2,32,324,4,3]}, "output": 10},
        {"input": {"lst": [1,0,1,8,2,4597,2,1,3,40,1,2,1,2,4,2,5,1]}, "output": 25},
        {"input": {"lst": [1,3,1,32,5107,34,83278,109,163,23,2323,32,30,1,9,3]}, "output": 13},
        {"input": {"lst": [0,724,32,71,99,32,6,0,5,91,83,0,5,6]}, "output": 11},
        {"input": {"lst": [0,81,12,3,1,21]}, "output": 3},
        {"input": {"lst": [0,8,1,2,1,7]}, "output": 7}]
    ).compile(
        test_examples=[
            {"input": {"lst": [0,3,2,1,3,5,7,4,5,5,5,2,181,32,4,32,3,2,32,324,4,3]}, "output": 10},
            {"input": {"lst": [1,0,1,8,2,4597,2,1,3,40,1,2,1,2,4,2,5,1]}, "output": 25},
            {"input": {"lst": [1,3,1,32,5107,34,83278,109,163,23,2323,32,30,1,9,3]}, "output": 13},
            {"input": {"lst": [0,724,32,71,99,32,6,0,5,91,83,0,5,6]}, "output": 11},
            {"input": {"lst": [0,81,12,3,1,21]}, "output": 3},
            {"input": {"lst": [0,8,1,2,1,7]}, "output": 7},
            {"input": {"lst": [8191]}, "output": 19},
            {"input": {"lst": [8191, 123456, 127, 7]}, "output": 19},
            {"input": {"lst": [127, 97, 8192]}, "output": 10},
        ]
    )
