from typing import List
from pyaskit import define_hinted, define_hinted

can_arrange = define_hinted(
    int,
    """Create a function which returns the largest index of an element which
    is not greater than or equal to the element immediately preceding it. If
    no such element exists then return -1. The given array {{arr}} will not contain
    duplicate values.""",
    training_examples=[
        {"input": {"arr": [1,2,4,3,5]}, "output": 3},
        {"input": {"arr": [1,2,3]}, "output": -1}]
    ).compile(
        test_examples=[
            {"input": {"arr": [1,2,4,3,5]}, "output": 3},
            {"input": {"arr": [1,2,3]}, "output": -1},
            {"input": {"arr": [1,4,2,5,6,7,8,9,10]}, "output": 2},
            {"input": {"arr": [4,8,5,7,3]}, "output": 4},
            {"input": {"arr": []}, "output": -1},
        ]
    )
