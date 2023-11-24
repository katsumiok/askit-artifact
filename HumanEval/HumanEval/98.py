from typing import List
from pyaskit import defun_hinted, define_hinted

count_upper = define_hinted(
    int,
    """ Given a string {{s}}, count the number of uppercase vowels in even indices. """,
    training_examples=[
        {"input": {"s": 'aBCdEf'}, "output": 1},
        {"input": {"s": 'abcdefg'}, "output": 0},
        {"input": {"s": 'dBBE'}, "output": 0}]
    ).compile(
        test_examples=[
            {"input": {"s": 'aBCdEf'}, "output": 1},
            {"input": {"s": 'abcdefg'}, "output": 0},
            {"input": {"s": 'dBBE'}, "output": 0},
            {"input": {"s": 'B'}, "output": 0},
            {"input": {"s": 'U'}, "output": 1},
            {"input": {"s": ''}, "output": 0},
            {"input": {"s": 'EEEE'}, "output": 2}
        ]
    )
