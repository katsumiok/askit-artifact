from typing import List
from pyaskit import defun_hinted, define_hinted

starts_one_ends = define_hinted(
    int,
    """Given a positive integer {{n}}, return the count of the numbers of {{n}}-digit
    positive integers that start or end with 1.""",
    training_examples=[]
).compile(
    test_examples=[
        {"input": {"n": 1}, "output": 1},
        {"input": {"n": 2}, "output": 18},
        {"input": {"n": 3}, "output": 180},
        {"input": {"n": 4}, "output": 1800},
        {"input": {"n": 5}, "output": 18000}]
)
