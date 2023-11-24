from typing import List
from pyaskit import defun_hinted, define_hinted

order_by_points = define_hinted(
    List[int],
    """
    Sorts the given list of integers {{nums}}
    in ascending order according to the sum of their digits.
    Note: if there are several items with similar sum of their digits,
    order them based on their index in original list.
    """,
    training_examples=[
        {"input": {"nums": [1, 11, -1, -11, -12]}, "output": [-1, -11, 1, -12, 11]},
        {"input": {"nums": []}, "output": []}]
    ).compile(
        test_examples=[
            {"input": {"nums": [1, 11, -1, -11, -12]}, "output": [-1, -11, 1, -12, 11]},
            {"input": {"nums": [1234,423,463,145,2,423,423,53,6,37,3457,3,56,0,46]}, "output": [0, 2, 3, 6, 53, 423, 423, 423, 1234, 145, 37, 46, 56, 463, 3457]},
            {"input": {"nums": []}, "output": []},
            {"input": {"nums": [1, -11, -32, 43, 54, -98, 2, -3]}, "output": [-3, -32, -98, -11, 1, 2, 43, 54]},
            {"input": {"nums": [1,2,3,4,5,6,7,8,9,10,11]}, "output": [1, 10, 2, 11, 3, 4, 5, 6, 7, 8, 9]},
            {"input": {"nums": [0,6,6,-76,-21,23,4]}, "output": [-76, -21, 0, 4, 23, 6, 6]}
        ]
    )
