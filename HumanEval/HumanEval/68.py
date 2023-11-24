from typing import List
from pyaskit import defun_hinted, define_hinted

pluck = define_hinted(
    List[int],
    """
    Given an array {{arr}} representing a branch of a tree that has non-negative integer nodes
    your task is to pluck one of the nodes and return it.
    The plucked node should be the node with the smallest even value.
    If multiple nodes with the same smallest even value are found return the node that has smallest index.

    The plucked node should be returned in a list, [ smalest_value, its index ],
    If there are no even values or the given array is empty, return [].
    """,
    training_examples=[
        {"input": {"arr": [4,2,3]}, "output": [2, 1], "explanation": "2 has the smallest even value, and 2 has the smallest index."},
        {"input": {"arr": [1,2,3]}, "output": [2, 1], "explanation": "2 has the smallest even value, and 3 has the smallest index."},
        {"input": {"arr": []}, "output": []},
        {"input": {"arr": [5, 0, 3, 0, 4, 2]}, "output": [0, 1], "explanation": "0 is the smallest value, but  there are two zeros, so we will choose the first zero, which has the smallest index."}]
    ).compile(
        test_examples=[
            {"input": {"arr": [4,2,3]}, "output": [2, 1]},
            {"input": {"arr": [1,2,3]}, "output": [2, 1]},
            {"input": {"arr": []}, "output": []},
            {"input": {"arr": [5, 0, 3, 0, 4, 2]}, "output": [0, 1]},
            {"input": {"arr": [1, 2, 3, 0, 5, 3]}, "output": [0, 3]},
            {"input": {"arr": [5, 4, 8, 4 ,8]}, "output": [4, 1]},
            {"input": {"arr": [7, 6, 7, 1]}, "output": [6, 1]},
            {"input": {"arr": [7, 9, 7, 1]}, "output": []}
        ]
    )
