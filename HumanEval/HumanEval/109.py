from typing import List
from pyaskit import defun_hinted, define_hinted

move_one_ball = define_hinted(
    bool,
    """
    For an array {{arr}}, determine if it is possible to get an array sorted in non-decreasing order by performing right shift operations. If it is possible to obtain the sorted array by performing the operation, then return True else return False. If the given array is empty then return True.
    """,
    training_examples=[
        {"input": {"arr": [3, 4, 5, 1, 2]}, "output": True},
        {"input": {"arr": [3, 5, 4, 1, 2]}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"arr": [3, 4, 5, 1, 2]}, "output": True},
            {"input": {"arr": [3, 5, 10, 1, 2]}, "output": True},
            {"input": {"arr": [4, 3, 1, 2]}, "output": False},
            {"input": {"arr": [3, 5, 4, 1, 2]}, "output": False},
            {"input": {"arr": []}, "output": True},
        ]
    )
