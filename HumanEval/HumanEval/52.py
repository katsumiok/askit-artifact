from typing import List
from pyaskit import defun_hinted, define_hinted

below_threshold = defun_hinted(
    bool,
    {'l': List[int], 't': int},
    """Return True if all numbers in the list {{l}} are below threshold {{t}}.
    """,
    training_examples=[
        {"input": {"l": [1, 2, 4, 10], "t": 100}, "output": True},
        {"input": {"l": [1, 20, 4, 10], "t": 5}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"l": [1, 2, 4, 10], "t": 100}, "output": True},
            {"input": {"l": [1, 20, 4, 10], "t": 5}, "output": False},
            {"input": {"l": [1, 20, 4, 10], "t": 21}, "output": True},
            {"input": {"l": [1, 20, 4, 10], "t": 22}, "output": True},
            {"input": {"l": [1, 8, 4, 10], "t": 11}, "output": True},
            {"input": {"l": [1, 8, 4, 10], "t": 10}, "output": False}]
    )
