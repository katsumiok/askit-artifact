from typing import List
from pyaskit import defun_hinted, define_hinted

monotonic = defun_hinted(
    bool,
    {'l': list},
    """Return True if list elements {{l}} are monotonically increasing or decreasing.
    """,
    training_examples=[
        {"input": {"l": [1, 2, 4, 20]}, "output": True},
        {"input": {"l": [1, 20, 4, 10]}, "output": False},
        {"input": {"l": [4, 1, 0, -10]}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"l": [1, 2, 4, 10]}, "output": True},
            {"input": {"l": [1, 2, 4, 20]}, "output": True},
            {"input": {"l": [1, 20, 4, 10]}, "output": False},
            {"input": {"l": [4, 1, 0, -10]}, "output": True},
            {"input": {"l": [4, 1, 1, 0]}, "output": True},
            {"input": {"l": [1, 2, 3, 2, 5, 60]}, "output": False},
            {"input": {"l": [1, 2, 3, 4, 5, 60]}, "output": True},
            {"input": {"l": [9, 9, 9, 9]}, "output": True},
        ]
    )
