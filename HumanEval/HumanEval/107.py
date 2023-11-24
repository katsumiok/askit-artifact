from typing import Tuple
from pyaskit import defun_hinted, define_hinted

even_odd_palindrome = defun_hinted(
    Tuple[int, int],
    {'n': int},
    """Given a positive integer {{n}}, return a tuple that has the number of even and odd
    integer palindromes that fall within the range(1, {{n}}), inclusive. 1 <= {{n}} <= 10^3. Returned tuple has the number of even and odd integer palindromes respectively.""",
    training_examples=[
        {"input": {"n": 3}, "output": (1, 2)},
        {"input": {"n": 12}, "output": (4, 6)}]
    ).compile(
        test_examples=[
            {"input": {"n": 123}, "output": (8, 13)},
            {"input": {"n": 12}, "output": (4, 6)},
            {"input": {"n": 3}, "output": (1, 2)},
            {"input": {"n": 63}, "output": (6, 8)},
            {"input": {"n": 25}, "output": (5, 6)},
            {"input": {"n": 19}, "output": (4, 6)},
            {"input": {"n": 9}, "output": (4, 5)},
            {"input": {"n": 1}, "output": (0, 1)}
        ]
    )
