from typing import List, Optional
from pyaskit import defun_hinted, define_hinted

longest = defun_hinted(
    Optional[str],
    {'strings': List[str]},
    """
    Out of list of strings {{strings}}, return the longest one.
    Return the first one in case of multiple strings of the same length.
    Return None in case the input list is empty.
    """,
    training_examples=[
        {"input": {"strings": []}, "output": None},
        {"input": {"strings": ['a', 'b', 'c']}, "output": 'a'},
        {"input": {"strings": ['a', 'bb', 'ccc']}, "output": 'ccc'}]
    ).compile(
        test_examples=[
            {"input": {"strings": []}, "output": None},
            {"input": {"strings": ['x', 'y', 'z']}, "output": 'x'},
            {"input": {"strings": ['x', 'yyy', 'zzzz', 'www', 'kkkk', 'abc']}, "output": 'zzzz'},
        ]
    )
