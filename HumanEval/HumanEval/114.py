from typing import List
from pyaskit import defun_hinted, define_hinted

minSubArraySum = define_hinted(
    int,
    """
    Given an array of integers {{nums}}, find the minimum sum of any non-empty sub-array
    Example
    """,
    training_examples=[
        {"input": {"nums": [2, 3, 4, 1, 2, 4]}, "output": 1},
        {"input": {"nums": [-1, -2, -3]}, "output": -6}
        ]
    ).compile(
        test_examples=[
            {"input": {"nums": [2, 3, 4, 1, 2, 4]}, "output": 1},
            {"input": {"nums": [-1, -2, -3]}, "output": -6},
            {"input": {"nums": [-1, -2, -3, 2, -10]}, "output": -14},
            {"input": {"nums": [-9999999999999999]}, "output": -9999999999999999},
            {"input": {"nums": [0, 10, 20, 1000000]}, "output": 0},
            {"input": {"nums": [-1, -2, -3, 10, -5]}, "output": -6},
            {"input": {"nums": [100, -1, -2, -3, 10, -5]}, "output": -6},
            {"input": {"nums": [10, 11, 13, 8, 3, 4]}, "output": 3},
            {"input": {"nums": [100, -33, 32, -1, 0, -2]}, "output": -33},
            {"input": {"nums": [-10]}, "output": -10},
            {"input": {"nums": [7]}, "output": 7},
            {"input": {"nums": [1, -1]}, "output": -1}
        ]
    )
