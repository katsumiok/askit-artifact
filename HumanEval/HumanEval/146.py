from typing import List
from pyaskit import defun_hinted, define_hinted

specialFilter = define_hinted(
    int,
    """
    Takes an array of numbers {{nums}} as input and returns the number of elements in the array that are greater than 10 and both first and last digits of a number are odd (1, 3, 5, 7, 9).
    """,
    training_examples=[
        {"input": {"nums": [15, -73, 14, -15]}, "output": 1},
        {"input": {"nums": [33, -2, -3, 45, 21, 109]}, "output": 2}]
    ).compile(
        test_examples=[
            {"input": {"nums": [5, -2, 1, -5]}, "output": 0},
            {"input": {"nums": [15, -73, 14, -15]}, "output": 1},
            {"input": {"nums": [33, -2, -3, 45, 21, 109]}, "output": 2},
            {"input": {"nums": [43, -12, 93, 125, 121, 109]}, "output": 4},
            {"input": {"nums": [71, -2, -33, 75, 21, 19]}, "output": 3},
            {"input": {"nums": [1]}, "output": 0},
            {"input": {"nums": []}, "output": 0}
        ]
    )
