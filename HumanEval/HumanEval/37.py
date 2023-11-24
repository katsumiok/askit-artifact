from typing import List
from pyaskit import defun_hinted, define_hinted

sort_even = defun_hinted(
    List[int],
    {'l': List[int]},
    """
    This function takes a list {{l}} and returns a list l' such that
    l' is identical to l in the odd indicies, while its values at the even indicies are equal
    to the values of the even indicies of l, but sorted.
    """,
    training_examples=[
        {"input": {"l": [1, 2, 3]}, "output": [1, 2, 3]},
        {"input": {"l": [5, 6, 3, 4]}, "output": [3, 6, 5, 4]}]
    ).compile(
        test_examples=[
            {"input": {"l": [1, 2, 3]}, "output": [1, 2, 3]},
            {"input": {"l": [5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]}, "output": [-10, 3, -5, 2, -3, 3, 5, 0, 9, 1, 123]},
            {"input": {"l": [5, 8, -12, 4, 23, 2, 3, 11, 12, -10]}, "output": [-12, 8, 3, 4, 5, 2, 12, 11, 23, -10]}]
    )
