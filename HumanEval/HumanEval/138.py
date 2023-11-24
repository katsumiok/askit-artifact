from typing import List
from pyaskit import defun_hinted, define_hinted

is_equal_to_sum_even = define_hinted(
    bool,
    """Evaluate whether the given number {{n}} can be written as the sum of exactly 4 positive even numbers
    """,
    training_examples=[
        {"input": {"n": 4}, "output": False},
        {"input": {"n": 6}, "output": False},
        {"input": {"n": 8}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"n": 4}, "output": False},
            {"input": {"n": 6}, "output": False},
            {"input": {"n": 8}, "output": True},
            {"input": {"n": 10}, "output": True},
            {"input": {"n": 11}, "output": False},
            {"input": {"n": 12}, "output": True},
            {"input": {"n": 13}, "output": False},
            {"input": {"n": 16}, "output": True},
        ]
    )
