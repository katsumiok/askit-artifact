from typing import List
from pyaskit import defun_hinted, define_hinted

is_happy = define_hinted(
    bool,
    """
    You are given a string {{s}}.
    Your task is to check if the string is happy or not.
    A string is happy if its length is at least 3 and every 3 consecutive letters are distinct
    For example:
    """,
    training_examples=[
        {"input": {"s": 'a'}, "output": False},
        {"input": {"s": 'aa'}, "output": False},
        {"input": {"s": 'abcd'}, "output": True},
        {"input": {"s": 'aabb'}, "output": False},
        {"input": {"s": 'adb'}, "output": True},
        {"input": {"s": 'xyy'}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"s": 'a'}, "output": False},
            {"input": {"s": 'aa'}, "output": False},
            {"input": {"s": 'abcd'}, "output": True},
            {"input": {"s": 'aabb'}, "output": False},
            {"input": {"s": 'adb'}, "output": True},
            {"input": {"s": 'xyy'}, "output": False},
            {"input": {"s": 'iopaxpoi'}, "output": True},
            {"input": {"s": 'iopaxioi'}, "output": False},
        ]
    )
