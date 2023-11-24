from typing import List
from pyaskit import defun_hinted, define_hinted

greatest_common_divisor = defun_hinted(
    int,
    {'a': int, 'b': int},
    """ Return a greatest common divisor of two integers {{a}} and {{b}}
    """,
    training_examples=[
        {"input": {"a": 3, "b": 5}, "output": 1},
        {"input": {"a": 25, "b": 15}, "output": 5}]
    ).compile(
        test_examples=[
            {"input": {"a": 3, "b": 7}, "output": 1},
            {"input": {"a": 10, "b": 15}, "output": 5},
            {"input": {"a": 49, "b": 14}, "output": 7},
            {"input": {"a": 144, "b": 60}, "output": 12},]
    )
