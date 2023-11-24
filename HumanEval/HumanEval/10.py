from typing import List
from pyaskit import defun_hinted, define_hinted

def is_palindrome(string: str) -> bool:
    """ Test if given string is a palindrome """
    return string == string[::-1]


make_palindrome = defun_hinted(
    str,
    {'string': str},
    """ Find the shortest palindrome that begins with a supplied {{string}}.
    Algorithm idea is simple:
    - Find the longest postfix of supplied {{string}} that is a palindrome.
    - Append to the end of the {{string}} reverse of a {{string}} prefix that comes before the palindromic suffix.
    """,
    training_examples=[
        {"input": {"string": ''}, "output": ''},
        {"input": {"string": 'cat'}, "output": 'catac'},
        {"input": {"string": 'cata'}, "output": 'catac'},]
    ).compile(
        test_examples=[
            {"input": {"string": ''}, "output": ''},
            {"input": {"string": 'x'}, "output": 'x'},
            {"input": {"string": 'xyz'}, "output": 'xyzyx'},
            {"input": {"string": 'xyx'}, "output": 'xyx'},
            {"input": {"string": 'jerry'}, "output": 'jerryrrej'},
        ]
    )
