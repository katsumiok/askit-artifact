from typing import List
from pyaskit import defun_hinted, define_hinted

solution = define_hinted(
    int,
    """Given a non-empty list of integers {{lst}}, return the sum of all of the odd elements that are in even positions.
    """,
    training_examples=[
        {"input": {"lst": [5, 8, 7, 1]}, "output": 12},
        {"input": {"lst": [3, 3, 3, 3, 3]}, "output": 9},
        {"input": {"lst": [30, 13, 24, 321]}, "output": 0}]
    ).compile(
        test_examples=[
            {"input": {"lst": [5, 8, 7, 1]}, "output": 12},
            {"input": {"lst": [3, 3, 3, 3, 3]}, "output": 9},
            {"input": {"lst": [30, 13, 24, 321]}, "output": 0},
            {"input": {"lst": [5, 9]}, "output": 5},
            {"input": {"lst": [2, 4, 8]}, "output": 0},
            {"input": {"lst": [30, 13, 23, 32]}, "output": 23},
            {"input": {"lst": [3, 13, 2, 9]}, "output": 3},]
    )
