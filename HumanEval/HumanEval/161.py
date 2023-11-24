from typing import List
from pyaskit import defun_hinted, define_hinted

solve = define_hinted(
    str,
    """
    You are given a string {{s}}.
    if s[i] is a letter, reverse its case from lower to upper or vise versa, 
    otherwise keep it as it is.
    If the string contains no letters, reverse the string.
    The function should return the resulted string.
    """,
    training_examples=[
        {"input": {"s": "1234"}, "output": "4321"},
        {"input": {"s": "ab"}, "output": "AB"},
        {"input": {"s": "#a@C"}, "output": "#A@c"}]
    ).compile(
        test_examples=[
            {"input": {"s": "AsDf"}, "output": "aSdF"},
            {"input": {"s": "1234"}, "output": "4321"},
            {"input": {"s": "ab"}, "output": "AB"},
            {"input": {"s": "#a@C"}, "output": "#A@c"},
            {"input": {"s": "#AsdfW^45"}, "output": "#aSDFw^45"},
            {"input": {"s": "#6@2"}, "output": "2@6#"},
            {"input": {"s": "#$a^D"}, "output": "#$A^d"},
            {"input": {"s": "#ccc"}, "output": "#CCC"}
        ]
    )
