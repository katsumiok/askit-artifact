from typing import List
from pyaskit import defun_hinted, define_hinted

vowels_count = define_hinted(
    int,
    """
    Takes a string {{s}} representing a word as input and returns the number of vowels in the string.
    Vowels in this case are 'a', 'e', 'i', 'o', 'u'. Here, 'y' is also a vowel, but only when it is at the end of the given word.
    """,
    training_examples=[
        {"input": {"s": "abcde"}, "output": 2},
        {"input": {"s": "ACEDY"}, "output": 3}]
    ).compile(
        test_examples=[
            {"input": {"s": "abcde"}, "output": 2},
            {"input": {"s": "Alone"}, "output": 3},
            {"input": {"s": "key"}, "output": 2},
            {"input": {"s": "bye"}, "output": 1},
            {"input": {"s": "keY"}, "output": 2},
            {"input": {"s": "bYe"}, "output": 1},
            {"input": {"s": "ACEDY"}, "output": 3},
        ]
    )
