from typing import List
from pyaskit import defun_hinted, define_hinted

change_base = defun_hinted(
    str,
    {'x': int, 'base': int},
    """Change numerical base of input number {{x}} to base {{base}}.
    return string representation after the conversion.
    base numbers are less than 10.
    """,
    training_examples=[
        {"input": {"x": 8, "base": 3}, "output": '22'},
        {"input": {"x": 8, "base": 2}, "output": '1000'},
        {"input": {"x": 7, "base": 2}, "output": '111'}]
    ).compile(
        test_examples=[
            {"input": {"x": 8, "base": 3}, "output": '22'},
            {"input": {"x": 9, "base": 3}, "output": '100'},
            {"input": {"x": 234, "base": 2}, "output": '11101010'},
            {"input": {"x": 16, "base": 2}, "output": '10000'},
            {"input": {"x": 8, "base": 2}, "output": '1000'},
            {"input": {"x": 7, "base": 2}, "output": '111'},
            {"input": {"x": 2, "base": 3}, "output": '2'},
            {"input": {"x": 3, "base": 4}, "output": '3'},
            {"input": {"x": 4, "base": 5}, "output": '4'},
            {"input": {"x": 5, "base": 6}, "output": '5'},
            {"input": {"x": 6, "base": 7}, "output": '6'},
            {"input": {"x": 7, "base": 8}, "output": '7'}
        ]
    )
