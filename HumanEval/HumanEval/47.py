from typing import List, Union
from pyaskit import defun_hinted, define_hinted

median = defun_hinted(
    Union[int, float],
    {'l': List[Union[int, float]]},
    """Return median of elements in the list {{l}}.
    """,
    training_examples=[
        {"input": {"l": [3, 1, 2, 4, 5]}, "output": 3},
        {"input": {"l": [-10, 4, 6, 1000, 10, 20]}, "output": 8.0}]
    ).compile(
        test_examples=[
            {"input": {"l": [3, 1, 2, 4, 5]}, "output": 3},
            {"input": {"l": [-10, 4, 6, 1000, 10, 20]}, "output": 8.0},
            {"input": {"l": [5]}, "output": 5},
            {"input": {"l": [6, 5]}, "output": 5.5},
            {"input": {"l": [8, 1, 3, 9, 9, 2, 7]}, "output": 7 }
        ]
    )
