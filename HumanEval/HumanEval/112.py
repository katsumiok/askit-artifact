from typing import List, Tuple
from pyaskit import defun_hinted

reverse_delete = defun_hinted(
    Tuple[str, bool],
    {'s': str, 'c': str},
    """Given two strings {{s}} and {{c}}, delete all the characters in {{s}} that are equal to any character in {{c}}
    then check if the result string is palindrome.
    A string is called palindrome if it reads the same backward as forward.
    You should return a tuple containing the result string and True/False for the check.
    """,
    training_examples=[
        {"input": {"s": "abcde", "c": "ae"}, "output": ('bcd',False)},
        {"input": {"s": "abcdef", "c": "b"}, "output": ('acdef',False)},
        {"input": {"s": "abcdedcba", "c": "ab"}, "output": ('cdedc',True)}]
    ).compile(
        test_examples=[
            {"input": {"s": "abcde","c": "ae"}, "output": ('bcd',False)},
            {"input": {"s": "abcdef", "c": "b"}, "output": ('acdef',False)},
            {"input": {"s": "abcdedcba","c": "ab"}, "output": ('cdedc',True)},
            {"input": {"s": "dwik","c": "w"}, "output": ('dik',False)},
            {"input": {"s": "a","c": "a"}, "output": ('',True)},
            {"input": {"s": "abcdedcba","c": ""}, "output": ('abcdedcba',True)},
            {"input": {"s": "abcdedcba","c": "v"}, "output": ('abcdedcba',True)},
            {"input": {"s": "vabba","c": "v"}, "output": ('abba',True)},
            {"input": {"s": "mamma", "c": "mia"}, "output": ("", True)}]
    )
