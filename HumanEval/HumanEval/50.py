from typing import List
from pyaskit import defun_hinted, define_hinted

encode_shift = defun_hinted(
    str,
    {'s': str},
    """
    Returns encoded string by shifting every character in {{s}} by 5 in the alphabet.
    """,
    training_examples=[]
    ).compile()

decode_shift = defun_hinted(
    str,
    {'s': str},
    """
    Takes as input string {{s}} encoded with encode_shift function. Returns decoded string.
    """,
    training_examples=[]
    ).compile()


def check(candidate):
    from random import randint, choice
    import copy
    import string

    letters = string.ascii_lowercase
    for _ in range(100):
        str = ''.join(choice(letters) for i in range(randint(10, 20)))
        encoded_str = encode_shift(str)
        assert candidate(copy.deepcopy(encoded_str)) == str

