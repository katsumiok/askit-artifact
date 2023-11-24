from typing import List
from pyaskit import defun_hinted, define_hinted

pairs_sum_to_zero = define_hinted(
    bool,
    """
    Takes a list of integers {{l}} as an input.
    Returns True if there are two distinct elements in the list that
    sum to zero, and False otherwise.
    """,
    training_examples=[
        {"input": {"l": [1, 3, 5, 0]}, "output": False},
        {"input": {"l": [1, 3, -2, 1]}, "output": False},
        {"input": {"l": [1, 2, 3, 7]}, "output": False},
        {"input": {"l": [2, 4, -5, 3, 5, 7]}, "output": True},
        {"input": {"l": [1]}, "output": False},
    ]
).compile(
    test_examples=[
        {"input": {"l": [1, 3, 5, 0]}, "output": False},
        {"input": {"l": [1, 3, -2, 1]}, "output": False},
        {"input": {"l": [1, 2, 3, 7]}, "output": False},
        {"input": {"l": [2, 4, -5, 3, 5, 7]}, "output": True},
        {"input": {"l": [1]}, "output": False},
        {"input": {"l": [-3, 9, -1, 3, 2, 30]}, "output": True},
        {"input": {"l": [-3, 9, -1, 3, 2, 31]}, "output": True},
        {"input": {"l": [-3, 9, -1, 4, 2, 30]}, "output": False},
        {"input": {"l": [-3, 9, -1, 4, 2, 31]}, "output": False},
    ]
)
