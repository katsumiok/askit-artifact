from typing import List
from pyaskit import define_hinted

search = define_hinted(
    int,
    """
    You are given a non-empty list of positive integers {{lst}}. Return the greatest integer that is greater than 
    zero, and has a frequency greater than or equal to the value of the integer itself.
    The frequency of an integer is the number of times it appears in the list.
    If no such a value exist, return -1.
    """,
    training_examples=[
        {"input": {"lst": [4, 1, 2, 2, 3, 1]}, "output": 2},
        {"input": {"lst": [1, 2, 2, 3, 3, 3, 4, 4, 4]}, "output": 3},
        {"input": {"lst": [5, 5, 4, 4, 4]}, "output": -1}]
    ).compile(
        test_examples=[
            {"input": {"lst": [5, 5, 5, 5, 1]}, "output": 1},
            {"input": {"lst": [4, 1, 4, 1, 4, 4]}, "output": 4},
            {"input": {"lst": [3, 3]}, "output": -1},
            {"input": {"lst": [8, 8, 8, 8, 8, 8, 8, 8]}, "output": 8},
            {"input": {"lst": [2, 3, 3, 2, 2]}, "output": 2},
            {"input": {"lst": [2, 7, 8, 8, 4, 8, 7, 3, 9, 6, 5, 10, 4, 3, 6, 7, 1, 7, 4, 10, 8, 1]}, "output": 1},
            {"input": {"lst": [3, 2, 8, 2]}, "output": 2},
            {"input": {"lst": [6, 7, 1, 8, 8, 10, 5, 8, 5, 3, 10]}, "output": 1},
            {"input": {"lst": [8, 8, 3, 6, 5, 6, 4]}, "output": -1},
            {"input": {"lst": [6, 9, 6, 7, 1, 4, 7, 1, 8, 8, 9, 8, 10, 10, 8, 4, 10, 4, 10, 1, 2, 9, 5, 7, 9]}, "output": 1},
            {"input": {"lst": [1, 9, 10, 1, 3]}, "output": 1},
            {"input": {"lst": [6, 9, 7, 5, 8, 7, 5, 3, 7, 5, 10, 10, 3, 6, 10, 2, 8, 6, 5, 4, 9, 5, 3, 10]}, "output": 5},
            {"input": {"lst": [1]}, "output": 1},
            {"input": {"lst": [8, 8, 10, 6, 4, 3, 5, 8, 2, 4, 2, 8, 4, 6, 10, 4, 2, 1, 10, 2, 1, 1, 5]}, "output": 4},
            {"input": {"lst": [2, 10, 4, 8, 2, 10, 5, 1, 2, 9, 5, 5, 6, 3, 8, 6, 4, 10]}, "output": 2},
            {"input": {"lst": [1, 6, 10, 1, 6, 9, 10, 8, 6, 8, 7, 3]}, "output": 1},
            {"input": {"lst": [9, 7, 7, 2, 4, 7, 2, 10, 9, 7, 5, 7, 2]}, "output": 2},
            {"input": {"lst": [5, 4, 10, 2, 1, 1, 10, 3, 6, 1, 8]}, "output": 1},
            {"input": {"lst": [7, 9, 9, 9, 3, 4, 1, 5, 9, 1, 2, 1, 1, 10, 7, 5, 6, 7, 6, 7, 7, 6]}, "output": 1},
            {"input": {"lst": [3, 10, 10, 9, 2]}, "output": -1},
        ]
    )
