from typing import List
from pyaskit import defun_hinted, define_hinted

incr_list = define_hinted(
    List[int],
    """Return list {{l}} with elements incremented by 1.""",
    training_examples=[
        {"input": {"l": [1, 2, 3]}, "output": [2, 3, 4]},
        {"input": {"l": [5, 3, 5, 2, 3, 3, 9, 0, 123]}, "output": [6, 4, 6, 3, 4, 4, 10, 1, 124]}]
    ).compile(
        test_examples=[
            {"input": {"l": []}, "output": []},
            {"input": {"l": [3, 2, 1]}, "output": [4, 3, 2]},
            {"input": {"l": [5, 2, 5, 2, 3, 3, 9, 0, 123]}, "output": [6, 3, 6, 3, 4, 4, 10, 1, 124]}
        ]
    )
