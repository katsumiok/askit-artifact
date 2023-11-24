from typing import List
from pyaskit import defun_hinted, define_hinted

unique_digits = define_hinted(
    List[int],
    """
    Given a list of positive integers {{x}}. return a sorted list of all 
    elements that hasn't any even digit.

    Note: Returned list should be sorted in increasing order.
    """,
    training_examples=[
        {"input": {"x": [15, 33, 1422, 1]}, "output": [1, 15, 33]},
        {"input": {"x": [152, 323, 1422, 10]}, "output": []}]
    ).compile(
        test_examples=[
            {"input": {"x": [15, 33, 1422, 1]}, "output": [1, 15, 33]},
            {"input": {"x": [152, 323, 1422, 10]}, "output": []},
            {"input": {"x": [12345, 2033, 111, 151]}, "output": [111, 151]},
            {"input": {"x": [135, 103, 31]}, "output": [31, 135]},
        ]
    )
