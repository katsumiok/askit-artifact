from typing import List, Union, Tuple
from pyaskit import defun_hinted, define_hinted


def largest_smallest_integers(lst): 
    largest_smallest_integers = define_hinted(
    Tuple[Union[None,int], Union[None,int]],
    """
    Returns a tuple (a, b), where 'a' is
    the largest of negative integers, and 'b' is the smallest
    of positive integers in a list {{lst}}.
    If there is no negative or positive integers, return them as None.
    """,
    training_examples=[
        {"input": {"lst": [2, 4, 1, 3, 5, 7]}, "output": (None, 1)},
        {"input": {"lst": []}, "output": (None, None)},
        {"input": {"lst": [0]}, "output": (None, None)},    
    ]
    ).compile(
        test_examples=[
            {"input": {"lst": [2, 4, 1, 3, 5, 7]}, "output": (None, 1)},
            {"input": {"lst": [2, 4, 1, 3, 5, 7, 0]}, "output": (None, 1)},
            {"input": {"lst": [1, 3, 2, 4, 5, 6, -2]}, "output": (-2, 1)},
            {"input": {"lst": [4, 5, 3, 6, 2, 7, -7]}, "output": (-7, 2)},
            {"input": {"lst": [7, 3, 8, 4, 9, 2, 5, -9]}, "output": (-9, 2)},
            {"input": {"lst": []}, "output": (None, None)},
            {"input": {"lst": [0]}, "output": (None, None)},
            {"input": {"lst": [-1, -3, -5, -6]}, "output": (-1, None)},
            {"input": {"lst": [-1, -3, -5, -6, 0]}, "output": (-1, None)},
            {"input": {"lst": [-6, -4, -4, -3, 1]}, "output": (-3, 1)},
            {"input": {"lst": [-6, -4, -4, -3, -100, 1]}, "output": (-3, 1)}
        ]
    )
