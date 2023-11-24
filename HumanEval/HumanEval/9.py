from typing import List, Tuple
from pyaskit import defun_hinted, define_hinted

rolling_max = defun_hinted(
    List[int],
    {'numbers': List[int]},
    """ From a given list of integers {{numbers}}, generate a list of rolling maximum element found until given moment
    in the sequence.
    """,
    training_examples=[
        {"input": {"numbers": [1, 2, 3, 2, 3, 4, 2]}, "output": [1, 2, 3, 3, 3, 4, 4]}
    ]
    ).compile(
        test_examples=[
            {"input": {"numbers": []}, "output": []},
            {"input": {"numbers": [1, 2, 3, 4]}, "output": [1, 2, 3, 4]},
            {"input": {"numbers": [4, 3, 2, 1]}, "output": [4, 4, 4, 4]},
            {"input": {"numbers": [3, 2, 3, 100, 3]}, "output": [3, 3, 3, 100, 100]}]
    )
