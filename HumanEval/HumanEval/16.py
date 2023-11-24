from typing import List
from pyaskit import defun_hinted, define_hinted

count_distinct_characters = defun_hinted(
    int,
    {'string': str},
    """ Given a string {{string}}, find out how many distinct characters (regardless of case) does it consist of
    """,
    training_examples=[
        {"input": {"string": 'xyzXYZ'}, "output": 3},
        {"input": {"string": 'Jerry'}, "output": 4}
    ]
).compile(
    test_examples=[
        {"input": {"string": ''}, "output": 0},
        {"input": {"string": 'abcde'}, "output": 5},
        {"input": {"string": 'abcde' + 'cade' + 'CADE'}, "output": 5},
        {"input": {"string": 'aaaaAAAAaaaa'}, "output": 1},
        {"input": {"string": 'Jerry jERRY JeRRRY'}, "output": 5}
    ]
)
