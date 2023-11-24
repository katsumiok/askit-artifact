from typing import List
from pyaskit import defun_hinted, define_hinted

modp = defun_hinted(
    int,
    {'n': int, 'p': int},
    """Return 2^{{n}} modulo {{p}} (be aware of numerics).
    """,
    training_examples=[
        {"input": {"n": 3, "p": 5}, "output": 3},
        {"input": {"n": 1101, "p": 101}, "output": 2},
        {"input": {"n": 0, "p": 101}, "output": 1},
        {"input": {"n": 3, "p": 11}, "output": 8},
        {"input": {"n": 100, "p": 101}, "output": 1}]
    ).compile(
        test_examples=[
            {"input": {"n": 3, "p": 5}, "output": 3},
            {"input": {"n": 1101, "p": 101}, "output": 2},
            {"input": {"n": 0, "p": 101}, "output": 1},
            {"input": {"n": 3, "p": 11}, "output": 8},
            {"input": {"n": 100, "p": 101}, "output": 1},
            {"input": {"n": 30, "p": 5}, "output": 4},
            {"input": {"n": 31, "p": 5}, "output": 3}]
    )
