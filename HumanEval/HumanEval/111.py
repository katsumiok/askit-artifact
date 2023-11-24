from typing import Dict
from pyaskit import defun_hinted, define_hinted

histogram = define_hinted(
    Dict[str, int],
    """Given a string {{test}} representing a space separated lowercase letters, return a dictionary
    of the letter with the most repetition and containing the corresponding count.
    If several letters have the same occurrence, return all of them.
    """,
    training_examples=[
        {"input": {"test": 'a b c'}, "output": {'a': 1, 'b': 1, 'c': 1}},
        {"input": {"test": 'a b b a'}, "output": {'a': 2, 'b': 2}},
        {"input": {"test": 'a b c a b'}, "output": {'a': 2, 'b': 2}},
        {"input": {"test": 'b b b b a'}, "output": {'b': 4}},
        {"input": {"test": ''}, "output": {}}]
    ).compile(
        test_examples=[
            {"input": {"test": 'a b b a'}, "output": {'a':2,'b': 2}},
            {"input": {"test": 'a b c a b'}, "output": {'a': 2, 'b': 2}},
            {"input": {"test": 'a b c d g'}, "output": {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'g': 1}},
            {"input": {"test": 'r t g'}, "output": {'r': 1,'t': 1,'g': 1}},
            {"input": {"test": 'b b b b a'}, "output": {'b': 4}},
            {"input": {"test": 'r t g'}, "output": {'r': 1,'t': 1,'g': 1}},
            {"input": {"test": ''}, "output": {}},
            {"input": {"test": 'a'}, "output": {'a': 1}},
        ]
    )
