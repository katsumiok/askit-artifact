from typing import List
from pyaskit import defun_hinted, define_hinted


choose_num = defun_hinted(
    int,
    {'x': int, 'y': int},
    "This function takes two positive numbers {{x}} and {{y}} and returns the biggest even integer number that is in the range [{{x}}, {{y}}] inclusive. If there's no such number, then the function should return -1.",
    training_examples=[]
).compile(
    test_examples=[
        {"input": {"x": 12, "y": 15}, "output": 14},
        {"input": {"x": 13, "y": 12}, "output": -1},
        {"input": {"x": 33, "y": 12354}, "output": 12354},
        {"input": {"x": 5234, "y": 5233}, "output": -1},
        {"input": {"x": 6, "y": 29}, "output": 28},
        {"input": {"x": 27, "y": 10}, "output": -1},
        {"input": {"x": 7, "y": 7}, "output": -1},
        {"input": {"x": 546, "y": 546}, "output": 546}]
)
