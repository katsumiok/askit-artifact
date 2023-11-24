from typing import List
from pyaskit import defun_hinted, define_hinted

how_many_times = defun_hinted(
    int,
    {'string': str, 'substring': str},
    """ Find how many times a given {{substring}} can be found in the original {{string}}. Count overlaping cases.
    """,
    training_examples=[
        {"input": {"string": '', "substring": 'a'}, "output": 0},
        {"input": {"string": 'aaa', "substring": 'a'}, "output": 3},
        {"input": {"string": 'aaaa', "substring": 'aa'}, "output": 3}]
    ).compile(
        test_examples=[
            {"input": {"string": '', "substring": 'x'}, "output": 0},
            {"input": {"string": 'xyxyxyx', "substring": 'x'}, "output": 4},
            {"input": {"string": 'cacacacac', "substring": 'cac'}, "output": 4},
            {"input": {"string": 'john doe', "substring": 'john'}, "output": 1},
        ]
    )
