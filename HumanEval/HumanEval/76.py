from typing import List
from pyaskit import defun_hinted, define_hinted

is_simple_power = defun_hinted(
    bool,
    {'x': int, 'n': int},
    """
    Returns true if a number {{x}} is a simple power of {{n}} and false in other cases.
    {{x}} is a simple power of {{n}} if n**int={{x}}
    """,
    training_examples=[
        {"input": {"x": 1, "n": 4}, "output": True},
        {"input": {"x": 2, "n": 2}, "output": True},
        {"input": {"x": 8, "n": 2}, "output": True},
        {"input": {"x": 3, "n": 2}, "output": False},
        {"input": {"x": 3, "n": 1}, "output": False},
        {"input": {"x": 5, "n": 3}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"x": 16, "n": 2}, "output": True},
            {"input": {"x": 143214, "n": 16}, "output": False},
            {"input": {"x": 4, "n": 2}, "output": True},
            {"input": {"x": 9, "n": 3}, "output": True},
            {"input": {"x": 16, "n": 4}, "output": True},
            {"input": {"x": 24, "n": 2}, "output": False},
            {"input": {"x": 128, "n": 4}, "output": False},
            {"input": {"x": 12, "n": 6}, "output": False},
            {"input": {"x": 1, "n": 1}, "output": True},
            {"input": {"x": 1, "n": 12}, "output": True}
        ]
    )
