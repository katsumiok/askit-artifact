from typing import List
from pyaskit import defun_hinted, define_hinted

count_nums = define_hinted(
    int,
    """
    Takes an array of integers {{arr}} and returns
    the number of elements which has a sum of digits > 0.
    If a number is negative, then its first signed digit will be negative:
    e.g. -123 has signed digits -1, 2, and 3.
    """,
    training_examples=[
        {"input": {"arr": []}, "output": 0},
        {"input": {"arr": [-1, 11, -11]}, "output": 1},
        {"input": {"arr": [1, 1, 2]}, "output": 3}]
    ).compile(
        test_examples=[
            {"input": {"arr": []}, "output": 0},
            {"input": {"arr": [-1, -2, 0]}, "output": 0},
            {"input": {"arr": [1, 1, 2, -2, 3, 4, 5]}, "output": 6},
            {"input": {"arr": [1, 6, 9, -6, 0, 1, 5]}, "output": 5},
            {"input": {"arr": [1, 100, 98, -7, 1, -1]}, "output": 4},
            {"input": {"arr": [12, 23, 34, -45, -56, 0]}, "output": 5},
            {"input": {"arr": [-0, 1**0]}, "output": 1},
            {"input": {"arr": [1]}, "output": 1}
        ]
    )