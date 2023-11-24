from typing import List
from pyaskit import defun_hinted, define_hinted

sort_array = define_hinted(
    List[int],
    """
    Given an array of non-negative integers {{array}}, return a copy of the given array after sorting,
    you will sort the given array in ascending order if the sum( first index value, last index value) is odd,
    or sort it in descending order if the sum( first index value, last index value) is even.

    Note:
    * don't change the given array.
    """,
    training_examples=[
        {"input": {"array": []}, "output": []},
        {"input": {"array": [5]}, "output": [5]},
        {"input": {"array": [2, 4, 3, 0, 1, 5]}, "output": [0, 1, 2, 3, 4, 5]},
        {"input": {"array": [2, 4, 3, 0, 1, 5, 6]}, "output": [6, 5, 4, 3, 2, 1, 0]}]
    ).compile(
        test_examples=[
            {"input": {"array": []}, "output": []},
            {"input": {"array": [5]}, "output": [5]},
            {"input": {"array": [2, 4, 3, 0, 1, 5]}, "output": [0, 1, 2, 3, 4, 5]},
            {"input": {"array": [2, 4, 3, 0, 1, 5, 6]}, "output": [6, 5, 4, 3, 2, 1, 0]},
            {"input": {"array": [2, 1]}, "output": [1, 2]},
            {"input": {"array": [15, 42, 87, 32 ,11, 0]}, "output": [0, 11, 15, 32, 42, 87]},
            {"input": {"array": [21, 14, 23, 11]}, "output": [23, 21, 14, 11]}]
    )
