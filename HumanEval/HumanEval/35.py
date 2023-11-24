from typing import List
from pyaskit import defun_hinted, define_hinted

max_element = defun_hinted(
    int,
    {'l': list},
    """Return maximum element in the list {{l}}.
    """,
    training_examples=[
        {"input": {"l": [1, 2, 3]}, "output": 3},
        {"input": {"l": [5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]}, "output": 123}]
    ).compile(
        test_examples=[
            {"input": {"l": [1, 2, 3]}, "output": 3},
            {"input": {"l": [5, 3, -5, 2, -3, 3, 9, 0, 124, 1, -10]}, "output": 124},]
    )
