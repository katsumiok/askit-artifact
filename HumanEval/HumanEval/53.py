from typing import List
from pyaskit import defun_hinted, define_hinted

add = defun_hinted(
    int,
    {'x': int, 'y': int},
    """Add two numbers {{x}} and {{y}}
    """,
    training_examples=[
        {"input": {"x": 2, "y": 3}, "output": 5},
        {"input": {"x": 5, "y": 7}, "output": 12}]
    ).compile(
        test_examples=[
            {"input": {"x": 0, "y": 1}, "output": 1},
            {"input": {"x": 1, "y": 0}, "output": 1},
            {"input": {"x": 2, "y": 3}, "output": 5},
            {"input": {"x": 5, "y": 7}, "output": 12},
            {"input": {"x": 7, "y": 5}, "output": 12}]
    )

import random
for i in range(100):
    x, y = random.randint(0, 1000), random.randint(0, 1000)
    assert add(x, y) == x + y
