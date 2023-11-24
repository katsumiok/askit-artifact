from typing import List
from pyaskit import defun_hinted, define_hinted

is_sorted = define_hinted(
    bool,
    """
    Given a list of numbers {{lst}}, return whether or not they are sorted
    in ascending order. If list has more than 1 duplicate of the same
    number, return False. Assume no negative numbers and only integers.
    """,
    training_examples=[
        {"input": {"lst": [5]}, "output": True},
        {"input": {"lst": [1, 2, 3, 4, 5]}, "output": True},
        {"input": {"lst": [1, 3, 2, 4, 5]}, "output": False},
        {"input": {"lst": [1, 2, 3, 4, 5, 6]}, "output": True},
        {"input": {"lst": [1, 2, 3, 4, 5, 6, 7]}, "output": True},
        {"input": {"lst": [1, 3, 2, 4, 5, 6, 7]}, "output": False},
        {"input": {"lst": [1, 2, 2, 3, 3, 4]}, "output": True},
        {"input": {"lst": [1, 2, 2, 2, 3, 4]}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"lst": [5]}, "output": True},
            {"input": {"lst": [1, 2, 3, 4, 5]}, "output": True},
            {"input": {"lst": [1, 3, 2, 4, 5]}, "output": False},
            {"input": {"lst": [1, 2, 3, 4, 5, 6]}, "output": True},
            {"input": {"lst": [1, 2, 3, 4, 5, 6, 7]}, "output": True},
            {"input": {"lst": [1, 3, 2, 4, 5, 6, 7]}, "output": False},
            {"input": {"lst": []}, "output": True},
            {"input": {"lst": [1]}, "output": True},
            {"input": {"lst": [3, 2, 1]}, "output": False},
            {"input": {"lst": [1, 2, 2, 2, 3, 4]}, "output": False},
            {"input": {"lst": [1, 2, 3, 3, 3, 4]}, "output": False},
            {"input": {"lst": [1, 2, 2, 3, 3, 4]}, "output": True},
            {"input": {"lst": [1, 2, 3, 4]}, "output": True},
        ]
    )
