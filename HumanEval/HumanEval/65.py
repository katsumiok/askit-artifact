from typing import List
from pyaskit import defun_hinted, define_hinted

circular_shift = defun_hinted(
    str,
    {'x': int, 'shift': int},
    """Circular shift the digits of the integer {{x}}, shift the digits right by {{shift}}
    and return the result as a string.
    If {{shift}} > number of digits, return digits reversed.
    """,
    training_examples=[
        {"input": {"x": 12, "shift": 1}, "output": "21"},
        {"input": {"x": 12, "shift": 2}, "output": "12"}]
    ).compile(
        test_examples=[
            {"input": {"x": 100, "shift": 2}, "output": "001"},
            {"input": {"x": 12, "shift": 2}, "output": "12"},
            {"input": {"x": 97, "shift": 8}, "output": "79"},
            {"input": {"x": 12, "shift": 1}, "output": "21"},
            {"input": {"x": 11, "shift": 101}, "output": "11"}]
    )
