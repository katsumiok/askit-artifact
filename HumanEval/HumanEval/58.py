from typing import List
from pyaskit import defun_hinted, define_hinted

common = defun_hinted(
    List[int],
    {'l1': List[int], 'l2': List[int]},
    """Return sorted unique common elements for two lists {{l1}} and {{l2}}.
    """,
    training_examples=[
        {"input": {"l1": [1, 4, 3, 34, 653, 2, 5], "l2": [5, 7, 1, 5, 9, 653, 121]}, "output": [1, 5, 653]},
        {"input": {"l1": [5, 3, 2, 8], "l2": [3, 2]}, "output": [2, 3]}
    ]
).compile(
    test_examples=[
        {"input": {"l1": [1, 4, 3, 34, 653, 2, 5], "l2": [5, 7, 1, 5, 9, 653, 121]}, "output": [1, 5, 653]},
        {"input": {"l1": [5, 3, 2, 8], "l2": [3, 2]}, "output": [2, 3]},
        {"input": {"l1": [4, 3, 2, 8], "l2": [3, 2, 4]}, "output": [2, 3, 4]},
        {"input": {"l1": [4, 3, 2, 8], "l2": []}, "output": []}
    ]
)
