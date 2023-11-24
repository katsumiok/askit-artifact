from typing import List, Union
from pyaskit import defun_hinted, define_hinted

split_words = define_hinted(
    Union[List[str], int],
    """
    Given a string of words {{txt}}, return a list of words split on whitespace, if no whitespaces exists in the text you
    should split on commas ',' if no commas exists you should return the number of lower-case letters with odd order in the
    alphabet, ord('a') = 0, ord('b') = 1, ... ord('z') = 25.
    """,
    training_examples=[
        {"input": {"txt": "Hello world!"}, "output": ["Hello", "world!"]},
        {"input": {"txt": "Hello,world!"}, "output": ["Hello", "world!"]},
        {"input": {"txt": "abcdef"}, "output": 3}]
    ).compile(
        test_examples=[
            {"input": {"txt": "Hello world!"}, "output": ["Hello","world!"]},
            {"input": {"txt": "Hello,world!"}, "output": ["Hello","world!"]},
            {"input": {"txt": "Hello world,!"}, "output": ["Hello","world,!"]},
            {"input": {"txt": "Hello,Hello,world !"}, "output": ["Hello,Hello,world","!"]},
            {"input": {"txt": "abcdef"}, "output": 3},
            {"input": {"txt": "aaabb"}, "output": 2},
            {"input": {"txt": "aaaBb"}, "output": 1},
            {"input": {"txt": ""}, "output": 0},
        ]
    )
