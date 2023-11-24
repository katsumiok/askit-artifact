from typing import List
from pyaskit import defun_hinted, define_hinted

all_prefixes = defun_hinted(
    List[str],
    {'string': str},
    """ Return list of all prefixes from shortest to longest of the input string {{string}}
    """,
    training_examples=[
        {"input": {"string": 'abc'}, "output": ['a', 'ab', 'abc']}]
).compile(
    test_examples=[
        {"input": {"string": ''}, "output": []},
        {"input": {"string": 'asdfgh'}, "output": ['a', 'as', 'asd', 'asdf', 'asdfg', 'asdfgh']},
        {"input": {"string": 'WWW'}, "output": ['W', 'WW', 'WWW']}
    ]
)