from typing import List
from pyaskit import defun_hinted, define_hinted

x_or_y = defun_hinted(
    int,
    {'n': int, 'x': int, 'y': int},
    """Return the value of {{x}} if {{n}} is a prime number and return the value of {{y}} otherwise.
    """,
    training_examples=[
        {"input": {"n": 7, "x": 34, "y": 12}, "output": 34},
        {"input": {"n": 15, "x": 8, "y": 5}, "output": 5}]
    ).compile(
        test_examples=[
            {"input": {"n": 7, "x": 34, "y": 12}, "output": 34},
            {"input": {"n": 15, "x": 8, "y": 5}, "output": 5},
            {"input": {"n": 3, "x": 33, "y": 5212}, "output": 33},
            {"input": {"n": 1259, "x": 3, "y": 52}, "output": 3},
            {"input": {"n": 7919, "x": -1, "y": 12}, "output": -1},
            {"input": {"n": 3609, "x": 1245, "y": 583}, "output": 583},
            {"input": {"n": 91, "x": 56, "y": 129}, "output": 129},
            {"input": {"n": 6, "x": 34, "y": 1234}, "output": 1234},
            {"input": {"n": 1, "x": 2, "y": 0}, "output": 0},
            {"input": {"n": 2, "x": 2, "y": 0}, "output": 2},
        ]
    )
