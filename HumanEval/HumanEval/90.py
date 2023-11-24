from typing import List, Optional
from pyaskit import defun_hinted, define_hinted

next_smallest = define_hinted(
    Optional[int],
    """
    You are given a list of integers {{lst}}.
    Write a function next_smallest() that returns the 2nd smallest element of the list.
    Return None if there is no such element.
    """,
    training_examples=[
        {"input": {"lst": [1, 2, 3, 4, 5]}, "output": 2},
        {"input": {"lst": [5, 1, 4, 3, 2]}, "output": 2},
        {"input": {"lst": []}, "output": None},
        {"input": {"lst": [1, 1]}, "output": None}]
    ).compile(
        test_examples=[
            {"input": {"lst": [1, 2, 3, 4, 5]}, "output": 2},
            {"input": {"lst": [5, 1, 4, 3, 2]}, "output": 2},
            {"input": {"lst": []}, "output": None},
            {"input": {"lst": [1, 1]}, "output": None},
            {"input": {"lst": [1, 1, 1, 1, 0]}, "output": 1},
            {"input": {"lst": [1, 0**0]}, "output": None},
            {"input": {"lst": [-35, 34, 12, -45]}, "output": -35}]
    )
