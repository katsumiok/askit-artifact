from typing import List
from pyaskit import defun_hinted, define_hinted

digitSum = define_hinted(
    int,
    """Takes a string {{s}} as input and returns the sum of the upper characters only'
    ASCII codes.
    """,
    training_examples=[
        {"input": {"s": ""}, "output": 0},
        {"input": {"s": "abAB"}, "output": 131},
        {"input": {"s": "abcCd"}, "output": 67},
        {"input": {"s": "helloE"}, "output": 69},
        {"input": {"s": "woArBld"}, "output": 131},
        {"input": {"s": "aAaaaXa"}, "output": 153},
    ]
).compile(
    test_examples=[
        {"input": {"s": ""}, "output": 0},
        {"input": {"s": "abAB"}, "output": 131},
        {"input": {"s": "abcCd"}, "output": 67},
        {"input": {"s": "helloE"}, "output": 69},
        {"input": {"s": "woArBld"}, "output": 131},
        {"input": {"s": "aAaaaXa"}, "output": 153},
        {"input": {"s": " How are yOu?"}, "output": 151},
        {"input": {"s": "You arE Very Smart"}, "output": 327},
    ]
)
