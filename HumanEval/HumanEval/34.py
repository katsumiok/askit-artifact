from typing import List
from pyaskit import defun_hinted, define_hinted

unique = define_hinted(
    List[int],
    """Return sorted unique elements in a list {{l}}
    """,
    training_examples=[
        {"input": {"l": [5, 3, 5, 2, 3, 3, 9, 0, 123]}, "output": [0, 2, 3, 5, 9, 123]}]
    ).compile(
        test_examples=[
            {"input": {"l": [5, 3, 5, 2, 3, 3, 9, 0, 123]}, "output": [0, 2, 3, 5, 9, 123]}
        ]
    )
