from typing import List
from pyaskit import defun_hinted, define_hinted

decimal_to_binary = define_hinted(
    str,
    """You will be given a number {{decimal}} in decimal form and your task is to convert it to
    binary format. The function should return a string, with each character representing a binary
    number. Each character in the string will be '0' or '1'.

    There will be an extra couple of characters 'db' at the beginning and at the end of the string.
    The extra characters are there to help with the format.
    """,
    training_examples=[
        {"input": {"decimal": 15}, "output": "db1111db"},
        {"input": {"decimal": 32}, "output": "db100000db"}]
    ).compile(
        test_examples=[
            {"input": {"decimal": 0}, "output": "db0db"},
            {"input": {"decimal": 32}, "output": "db100000db"},
            {"input": {"decimal": 103}, "output": "db1100111db"},
            {"input": {"decimal": 15}, "output": "db1111db"},
        ]
    )
