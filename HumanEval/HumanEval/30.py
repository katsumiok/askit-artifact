from typing import List
from pyaskit import defun_hinted, define_hinted

get_positive = define_hinted(
    List[int],
    """
    Return only positive numbers in the list {{l}}.
    """,
    training_examples=[
        {"input": {"l": [-1, 2, -4, 5, 6]}, "output": [2, 5, 6]},
        {"input": {"l": [5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]}, "output": [5, 3, 2, 3, 9, 123, 1]}
    ]
).compile(
    test_examples=[
        {"input": {"l": [-1, -2, 4, 5, 6]}, "output": [4, 5, 6]},
        {"input": {"l": [5, 3, -5, 2, 3, 3, 9, 0, 123, 1, -10]}, "output": [5, 3, 2, 3, 3, 9, 123, 1]},
        {"input": {"l": [-1, -2]}, "output": []},
        {"input": {"l": []}, "output": []}
    ]
)
