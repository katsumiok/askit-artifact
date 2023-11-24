from typing import List
from pyaskit import defun_hinted

strlen = defun_hinted(
    int,
    {'string': str},
    """ Return length of given string {{string}}
    """,
    training_examples=[
        {"input": {"string": ''}, "output": 0},
        {"input": {"string": 'abc'}, "output": 3}]
    ).compile(
        test_examples=[
            {"input": {"string": ''}, "output": 0},
            {"input": {"string": 'x'}, "output": 1},
            {"input": {"string": 'asdasnakj'}, "output": 9},
        ]
    )
