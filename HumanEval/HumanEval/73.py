from typing import List
from pyaskit import defun_hinted, define_hinted

smallest_change = define_hinted(
    int,
    """
    Given an array {{arr}} of integers, find the minimum number of elements that
    need to be changed to make the array palindromic. A palindromic array is an array that
    is read the same backwards and forwards. In one change, you can change one element to any other element.
    """,
    training_examples=[
        {"input": {"arr": [1,2,3,5,4,7,9,6]}, "output": 4},
        {"input": {"arr": [1, 2, 3, 4, 3, 2, 2]}, "output": 1},
        {"input": {"arr": [1, 2, 3, 2, 1]}, "output": 0}]
    ).compile(
        test_examples=[
            {"input": {"arr": [1,2,3,5,4,7,9,6]}, "output": 4},
            {"input": {"arr": [1, 2, 3, 4, 3, 2, 2]}, "output": 1},
            {"input": {"arr": [1, 4, 2]}, "output": 1},
            {"input": {"arr": [1, 4, 4, 2]}, "output": 1},
            {"input": {"arr": [1, 2, 3, 2, 1]}, "output": 0},
            {"input": {"arr": [3, 1, 1, 3]}, "output": 0},
            {"input": {"arr": [1]}, "output": 0},
            {"input": {"arr": [0, 1]}, "output": 1}
        ]
    )
