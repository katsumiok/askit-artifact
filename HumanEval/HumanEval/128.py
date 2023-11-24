from typing import List, Optional
from pyaskit import defun_hinted, define_hinted

prod_signs = define_hinted(
    Optional[int],
    """ 
    Given an array {{arr}} of integers and return
    sum of magnitudes of integers multiplied by product of all signs
    of each number in the array, represented by 1, -1 or 0.
    return None for empty {{arr}}.
    """,
    training_examples=[
        {"input": {"arr": [1, 2, 2, -4]}, "output": -9},
        {"input": {"arr": [0, 1]}, "output": 0},
        {"input": {"arr": []}, "output": None}]
    ).compile(
        test_examples=[
            {"input": {"arr": [1, 2, 2, -4]}, "output": -9},
            {"input": {"arr": [0, 1]}, "output": 0},
            {"input": {"arr": [1, 1, 1, 2, 3, -1, 1]}, "output": -10},
            {"input": {"arr": []}, "output": None},
            {"input": {"arr": [2, 4,1, 2, -1, -1, 9]}, "output": 20},
            {"input": {"arr": [-1, 1, -1, 1]}, "output": 4},
            {"input": {"arr": [-1, 1, 1, 1]}, "output": -4},
            {"input": {"arr": [-1, 1, 1, 0]}, "output": 0}
        ]
    )
