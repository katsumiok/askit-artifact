from typing import List
from pyaskit import defun_hinted, define_hinted

will_it_fly = defun_hinted(
    bool,
    {'q': List[int], 'w': int},
    """
    Returns True if the object {{q}} will fly, and False otherwise.
    The object {{q}} will fly if it's balanced (it is a palindromic list) and the sum of its elements is less than or equal the maximum possible weight {{w}}.
    Example:
    will_it_fly([1, 2], 5) ➞ False 
    # 1+2 is less than the maximum possible weight, but it's unbalanced.

    will_it_fly([3, 2, 3], 1) ➞ False
    # it's balanced, but 3+2+3 is more than the maximum possible weight.

    will_it_fly([3, 2, 3], 9) ➞ True
    # 3+2+3 is less than the maximum possible weight, and it's balanced.

    will_it_fly([3], 5) ➞ True
    # 3 is less than the maximum possible weight, and it's balanced.
    """,
    training_examples=[
        {"input": {"q": [1, 2], "w": 5}, "output": False},
        {"input": {"q": [3, 2, 3], "w": 1}, "output": False},
        {"input": {"q": [3, 2, 3], "w": 9}, "output": True},
        {"input": {"q": [3], "w": 5}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"q": [3, 2, 3], "w": 9}, "output": True},
            {"input": {"q": [1, 2], "w": 5}, "output": False},
            {"input": {"q": [3], "w": 5}, "output": True},
            {"input": {"q": [3, 2, 3], "w": 1}, "output": False},
            {"input": {"q": [1, 2, 3], "w": 6}, "output": False},
            {"input": {"q": [5], "w": 5}, "output": True},]
    )
