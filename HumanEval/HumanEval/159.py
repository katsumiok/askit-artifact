from typing import List
from pyaskit import defun_hinted, define_hinted

eat = defun_hinted(
    List[int],
    {'number': int, 'need': int, 'remaining': int},
    """ You're a hungry rabbit, and you already have eaten a certain number of carrots {{number}},
    but now you need to eat more carrots {{need}} to complete the day's meals.
    you should return an array of [ total number of eaten carrots after your meals,
                                    the number of carrots left after your meals ]
    if there are not enough remaining carrots {{remaining}}, you will eat all remaining carrots, but will still be hungry.
    """,
    training_examples=[
        {"input": {"number": 5, "need": 6, "remaining": 10}, "output": [11, 4]},
        {"input": {"number": 4, "need": 8, "remaining": 9}, "output": [12, 1]},
        {"input": {"number": 1, "need": 10, "remaining": 10}, "output": [11, 0]},
        {"input": {"number": 2, "need": 11, "remaining": 5}, "output": [7, 0]}
    ]
).compile(
    test_examples=[
        {"input": {"number": 5, "need": 6, "remaining": 10}, "output": [11, 4]},
        {"input": {"number": 4, "need": 8, "remaining": 9}, "output": [12, 1]},
        {"input": {"number": 1, "need": 10, "remaining": 10}, "output": [11, 0]},
        {"input": {"number": 2, "need": 11, "remaining": 5}, "output": [7, 0]},
        {"input": {"number": 4, "need": 5, "remaining": 7}, "output": [9, 2]},
        {"input": {"number": 4, "need": 5, "remaining": 1}, "output": [5, 0]}
    ]
)
