from typing import List
from pyaskit import define_hinted

sum_squares = define_hinted(
    int,
    """You are given a list of numbers {{lst}}.
    You need to return the sum of squared numbers in the given list,
    round each element in the list to the upper int(Ceiling) first.
    """,
    training_examples=[
        {"input": {"lst": [1,2,3]}, "output": 14},
        {"input": {"lst": [1,4,9]}, "output": 98},
        {"input": {"lst": [1,3,5,7]}, "output": 84},
        {"input": {"lst": [1.4,4.2,0]}, "output": 29},
        {"input": {"lst": [-2.4,1,1]}, "output": 6}]
    ).compile(
        test_examples=[
            {"input": {"lst": [1,2,3]}, "output": 14},
            {"input": {"lst": [1.0,2,3]}, "output": 14},
            {"input": {"lst": [1,3,5,7]}, "output": 84},
            {"input": {"lst": [1.4,4.2,0]}, "output": 29},
            {"input": {"lst": [-2.4,1,1]}, "output": 6},
            {"input": {"lst": [100,1,15,2]}, "output": 10230},
            {"input": {"lst": [10000,10000]}, "output": 200000000},
            {"input": {"lst": [-1.4,4.6,6.3]}, "output": 75},
            {"input": {"lst": [-1.4,17.9,18.9,19.9]}, "output": 1086},
            {"input": {"lst": [0]}, "output": 0},
            {"input": {"lst": [-1]}, "output": 1},
            {"input": {"lst": [-1,1,0]}, "output": 2}
        ]
    )
