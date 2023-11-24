from typing import List
from pyaskit import defun_hinted

make_a_pile = defun_hinted(
    List[int],
    {'n': int},
    """Given a positive integer {{n}}, you have to make a pile of n levels of stones.
    The first level has n stones.
    The number of stones in the next level is:
        - the next odd number if n is odd.
        - the next even number if n is even.
    Return the number of stones in each level in a list, where element at index
    i represents the number of stones in the level (i+1).""",
    training_examples=[{"input": {"n": 3}, "output": [3, 5, 7]}]
    ).compile(
        test_examples=[
            {"input": {"n": 3}, "output": [3, 5, 7]},
            {"input": {"n": 4}, "output": [4, 6, 8, 10]},
            {"input": {"n": 5}, "output": [5, 7, 9, 11, 13]},
            {"input": {"n": 6}, "output": [6, 8, 10, 12, 14, 16]},
            {"input": {"n": 8}, "output": [8, 10, 12, 14, 16, 18, 20, 22]}
        ]
    )
