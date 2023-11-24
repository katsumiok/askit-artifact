from typing import List
from pyaskit import defun_hinted, define_hinted

string_sequence = defun_hinted(
    str,
    {'n': int},
    """ Return a string containing space-delimited numbers starting from 0 upto {{n}} inclusive.
    """,
    training_examples=[
        {"input": {"n": 0}, "output": '0'},
        {"input": {"n": 5}, "output": '0 1 2 3 4 5'}]
    ).compile(
        test_examples=[
            {"input": {"n": 0}, "output": '0'},
            {"input": {"n": 3}, "output": '0 1 2 3'},
            {"input": {"n": 10}, "output": '0 1 2 3 4 5 6 7 8 9 10'}
        ]
    )
