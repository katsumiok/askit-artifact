from typing import Union, Optional
from pyaskit import defun_hinted, define_hinted

compare_one = defun_hinted(
    Optional[Union[int, float, str]],
    {'a': Union[int, float, str], 'b': Union[int, float, str]},
    """ Creates a function that takes integers, floats, or strings representing
    real numbers {{a}} and {{b}}, and returns the larger variable in its given variable type.
    Return None if the values are equal.
    Note: If a real number is represented as a string, the floating point might be . or ,
    """,
    training_examples=[
        {"input": {"a": 1, "b": 2.5}, "output": 2.5},
        {"input": {"a": 1, "b": "2,3"}, "output": "2,3"},
        {"input": {"a": "5,1", "b": "6"}, "output": "6"},
        {"input": {"a": "1", "b": 1}, "output": None}]
    ).compile(
        test_examples=[
            {"input": {"a": 1, "b": 2}, "output": 2},
            {"input": {"a": 1, "b": 2.5}, "output": 2.5},
            {"input": {"a": 2, "b": 3}, "output": 3},
            {"input": {"a": 5, "b": 6}, "output": 6},
            {"input": {"a": 1, "b": "2,3"}, "output": "2,3"},
            {"input": {"a": "5,1", "b": "6"}, "output": "6"},
            {"input": {"a": "1", "b": "2"}, "output": "2"},
            {"input": {"a": "1", "b": 1}, "output": None}]
    )

