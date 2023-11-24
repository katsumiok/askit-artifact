from typing import List
from pyaskit import defun_hinted, define_hinted

is_multiply_prime = define_hinted(
    bool,
    """Returns true if the given number {{a}} is the multiplication of 3 prime numbers
    and false otherwise.
    Knowing that (a) is less then 100. 
    Example:
    is_multiply_prime(30) == True
    30 = 2 * 3 * 5
    """,
    training_examples=[
        {"input": {"a": 30}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"a": 5}, "output": False},
            {"input": {"a": 30}, "output": True},
            {"input": {"a": 8}, "output": True},
            {"input": {"a": 10}, "output": False},
            {"input": {"a": 125}, "output": True},
            {"input": {"a": 3 * 5 * 7}, "output": True},
            {"input": {"a": 3 * 6 * 7}, "output": False},
            {"input": {"a": 9 * 9 * 9}, "output": False},
            {"input": {"a": 11 * 9 * 9}, "output": False},
            {"input": {"a": 11 * 13 * 7}, "output": True},
        ]
    )
