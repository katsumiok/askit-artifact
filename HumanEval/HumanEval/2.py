from typing import List
from pyaskit import defun_hinted, define_hinted

truncate_number = defun_hinted(
    float,
    {'number': float},
    """ Given a positive floating point {{number}}, it can be decomposed into
    and integer part (largest integer smaller than given number) and decimals
    (leftover part always smaller than 1).

    Return the decimal part of the {{number}}.""",
    training_examples=[
        {"input": {"number": 3.5}, "output": 0.5}]
    ).compile(
        test_examples=[
            {"input": {"number": 3.5}, "output": 0.5},
#            {"input": {"number": 1.33}, "output": 0.33},
#            {"input": {"number": 123.456}, "output": 0.456}
        ]
    )


def check(candidate):
    assert candidate(3.5) == 0.5
    assert abs(candidate(1.33) - 0.33) < 1e-6
    assert abs(candidate(123.456) - 0.456) < 1e-6