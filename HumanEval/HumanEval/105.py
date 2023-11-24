from typing import List
from pyaskit import defun_hinted

by_length = defun_hinted(
    List[str],
    {'arr': List[int]},
    """
    Given an array of integers {{arr}}, sort the integers that are between 1 and 9 inclusive,
    reverse the resulting array, and then replace each digit by its corresponding name from
    "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine".
    """,
    training_examples=[]
    ).compile(
        test_examples=[
            {"input": {"arr": [2, 1, 1, 4, 5, 8, 2, 3]}, "output": ["Eight", "Five", "Four", "Three", "Two", "Two", "One", "One"]},
            {"input": {"arr": []}, "output": []},
            {"input": {"arr": [1, -1 , 55]}, "output": ['One']},
            {"input": {"arr": [1, -1, 3, 2]}, "output": ["Three", "Two", "One"]},
            {"input": {"arr": [9, 4, 8]}, "output": ["Nine", "Eight", "Four"]}
        ]
    )
