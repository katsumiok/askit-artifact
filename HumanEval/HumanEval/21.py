from typing import List
from pyaskit import defun_hinted

rescale_to_unit = defun_hinted(
    List[float],
    {'numbers': List[float]},
    """ Given list of numbers (of at least two elements) {{numbers}}, apply a linear transform to that list,
    such that the smallest number will become 0 and the largest will become 1
    """,
    training_examples=[
        {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0]}, "output": [0.0, 0.25, 0.5, 0.75, 1.0]}]
    ).compile(
        test_examples=[
            {"input": {"numbers": [2.0, 49.9]}, "output": [0.0, 1.0]},
            {"input": {"numbers": [100.0, 49.9]}, "output": [1.0, 0.0]},
            {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0]}, "output": [0.0, 0.25, 0.5, 0.75, 1.0]},
            {"input": {"numbers": [2.0, 1.0, 5.0, 3.0, 4.0]}, "output": [0.25, 0.0, 1.0, 0.5, 0.75]},
            {"input": {"numbers": [12.0, 11.0, 15.0, 13.0, 14.0]}, "output": [0.25, 0.0, 1.0, 0.5, 0.75]},]
    )
