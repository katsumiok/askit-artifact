from typing import List
from pyaskit import defun_hinted

count_up_to = defun_hinted(
    List[int],
    {'n': int},
    """Takes a non-negative integer {{n}} and returns an array of the first {{n}}
     integers that are prime numbers and less than {{n}}.
    """,
    training_examples=[
        {"input": {"n": 5}, "output": [2,3]},
        {"input": {"n": 11}, "output": [2,3,5,7]},
        {"input": {"n": 0}, "output": []},
        {"input": {"n": 20}, "output": [2,3,5,7,11,13,17,19]},
        {"input": {"n": 1}, "output": []},
        {"input": {"n": 18}, "output": [2,3,5,7,11,13,17]}]
    ).compile(
        test_examples=[
            {"input": {"n": 5}, "output": [2,3]},
            {"input": {"n": 6}, "output": [2,3,5]},
            {"input": {"n": 7}, "output": [2,3,5]},
            {"input": {"n": 10}, "output": [2,3,5,7]},
            {"input": {"n": 0}, "output": []},
            {"input": {"n": 22}, "output": [2,3,5,7,11,13,17,19]},
            {"input": {"n": 1}, "output": []},
            {"input": {"n": 18}, "output": [2,3,5,7,11,13,17]},
            {"input": {"n": 47}, "output": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]},
            {"input": {"n": 101}, "output": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]}]
    )
