from typing import List
from pyaskit import defun_hinted, define_hinted

add = define_hinted(
    int,
    """
    Given a non-empty list of integers {{lst}}. add the even elements that are at odd indices..
    Examples:
    add([4, 2, 6, 7]) ==> 2 
    """,
    training_examples=[
        {"input": {"lst": [4, 2, 6, 7]}, "output": 2}]
    ).compile(
        test_examples=[
            {"input": {"lst": [4, 88]}, "output": 88},
            {"input": {"lst": [4, 5, 6, 7, 2, 122]}, "output": 122},
            {"input": {"lst": [4, 0, 6, 7]}, "output": 0},
            {"input": {"lst": [4, 4, 6, 8]}, "output": 12},
        ]
    )
