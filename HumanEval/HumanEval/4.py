from typing import List
from pyaskit import defun_hinted, define_hinted

mean_absolute_deviation = defun_hinted(
    float,
    {'numbers': List[float]},
    """For a given list of input numbers {{numbers}}, calculate Mean Absolute Deviation
    around the mean of this dataset.
    Mean Absolute Deviation is the average absolute difference between each
    element and a centerpoint (mean in this case):
    MAD = average | x - x_mean |
    """,
    training_examples=[
        {"input": {"numbers": [1.0, 2.0, 3.0, 4.0]}, "output": 1.0}]
    ).compile(
        test_examples=[
            {"input": {"numbers": [1.0, 2.0, 3.0]}, "output": 2.0/3.0},
            {"input": {"numbers": [1.0, 2.0, 3.0, 4.0]}, "output": 1.0},
            {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0]}, "output": 6.0/5.0}
        ]
    )
