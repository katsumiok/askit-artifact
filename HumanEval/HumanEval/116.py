from typing import List
from pyaskit import defun_hinted, define_hinted

sort_array = define_hinted(
    List[int],
    """
    Sort an array of non-negative integers {{arr}} according to
    number of ones in their binary representation in ascending order.
    For similar number of ones, sort based on decimal value.
    """,
    training_examples=[
        {"input": {"arr": [1, 5, 2, 3, 4]}, "output": [1, 2, 4, 3, 5]},
        {"input": {"arr": [-2, -3, -4, -5, -6]}, "output": [-4, -2, -6, -5, -3]},
        {"input": {"arr": [1, 0, 2, 3, 4]}, "output": [0, 1, 2, 4, 3]}
    ]
).compile(
    test_examples=[
        {"input": {"arr": [1,5,2,3,4]}, "output": [1, 2, 4, 3, 5]},
        {"input": {"arr": [-2,-3,-4,-5,-6]}, "output": [-4, -2, -6, -5, -3]},
        {"input": {"arr": [1,0,2,3,4]}, "output": [0, 1, 2, 4, 3]},
        {"input": {"arr": []}, "output": []},
        {"input": {"arr": [2,5,77,4,5,3,5,7,2,3,4]}, "output": [2, 2, 4, 4, 3, 3, 5, 5, 5, 7, 77]},
        {"input": {"arr": [3,6,44,12,32,5]}, "output": [32, 3, 5, 6, 12, 44]},
        {"input": {"arr": [2,4,8,16,32]}, "output": [2, 4, 8, 16, 32]},
        {"input": {"arr": [2,4,8,16,32]}, "output": [2, 4, 8, 16, 32]}
        ]
    )
