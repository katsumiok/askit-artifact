from typing import List
from pyaskit import defun_hinted, define_hinted

below_zero = defun_hinted(
    bool,
    {'operations': List[int]},
    """ You're given a list of deposit and withdrawal {{operations}} on a bank account that starts with
    zero balance. Your task is to detect if at any point the balance of account fallls below zero, and
    at that point function should return True. Otherwise it should return False.
    """,
    training_examples=[
        {"input": {"operations": [1, 2, 3]}, "output": False},
        {"input": {"operations": [1, 2, -4, 5]}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"operations": []}, "output": False},
            {"input": {"operations": [1, 2, -3, 1, 2, -3]}, "output": False},
            {"input": {"operations": [1, 2, -4, 5, 6]}, "output": True},
            {"input": {"operations": [1, -1, 2, -2, 5, -5, 4, -4]}, "output": False},
            {"input": {"operations": [1, -1, 2, -2, 5, -5, 4, -5]}, "output": True},
            {"input": {"operations": [1, -2, 2, -2, 5, -5, 4, -4]}, "output": True}]
    )

