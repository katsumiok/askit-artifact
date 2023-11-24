from typing import List
from pyaskit import defun_hinted, define_hinted

remove_duplicates = defun_hinted(
    List[int],
    {'numbers': List[int]},
    """ From a list of integers {{numbers}}, remove all elements that occur more than once.
    Keep order of elements left the same as in the input.
    """,
    training_examples=[
        {"input": {"numbers": [1, 2, 3, 2, 4]}, "output": [1, 3, 4]}]
    ).compile(
        test_examples=[
            {"input": {"numbers": []}, "output": []},
            {"input": {"numbers": [1, 2, 3, 4]}, "output": [1, 2, 3, 4]},
            {"input": {"numbers": [1, 2, 3, 2, 4, 3, 5]}, "output": [1, 4, 5]},
        ]
    )
