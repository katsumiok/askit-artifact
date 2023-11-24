from typing import List
from pyaskit import defun_hinted, define_hinted

iscube = define_hinted(
    bool,
    """
    Takes an integer {{a}} and returns True 
    if this ingeger is a cube of some integer number.
    """,
    training_examples=[
        {"input": {"a": 1}, "output": True},
        {"input": {"a": 2}, "output": False},
        {"input": {"a": -1}, "output": True},
        {"input": {"a": 64}, "output": True},
        {"input": {"a": 0}, "output": True},
        {"input": {"a": 180}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"a": 1}, "output": True},
            {"input": {"a": 2}, "output": False},
            {"input": {"a": -1}, "output": True},
            {"input": {"a": 64}, "output": True},
            {"input": {"a": 180}, "output": False},
            {"input": {"a": 1000}, "output": True},
            {"input": {"a": 0}, "output": True},
            {"input": {"a": 1729}, "output": False}
        ]
    )
