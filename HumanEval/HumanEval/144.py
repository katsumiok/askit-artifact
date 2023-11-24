from typing import List
from pyaskit import defun_hinted, define_hinted

simplify = defun_hinted(
    bool,
    {'x': str, 'n': str},
    """Both {{x}} and {{n}}, are string representation of a fraction, and have the following format,
    where both numerator and denominator are positive whole numbers.
    The function returns True if the result of {{x}} * {{n}} evaluates to a whole number and False otherwise.
    You can assume that both {{x}}, and {{n}} are valid fractions, and do not have zero as a denominator.
    """,
    training_examples=[
        {"input": {"x": "1/5", "n": "5/1"}, "output": True},
        {"input": {"x": "1/6", "n": "2/1"}, "output": False},
        {"input": {"x": "7/10", "n": "10/2"}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"x": "1/5", "n": "5/1"}, "output": True},
            {"input": {"x": "1/6", "n": "2/1"}, "output": False},
            {"input": {"x": "5/1", "n": "3/1"}, "output": True},
            {"input": {"x": "7/10", "n": "10/2"}, "output": False},
            {"input": {"x": "2/10", "n": "50/10"}, "output": True},
            {"input": {"x": "7/2", "n": "4/2"}, "output": True},
            {"input": {"x": "11/6", "n": "6/1"}, "output": True},
            {"input": {"x": "2/3", "n": "5/2"}, "output": False},
            {"input": {"x": "5/2", "n": "3/5"}, "output": False},
            {"input": {"x": "2/4", "n": "8/4"}, "output": True},
            {"input": {"x": "2/4", "n": "4/2"}, "output": True},
            {"input": {"x": "1/5", "n": "1/5"}, "output": False}]
    )
