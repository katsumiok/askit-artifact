from typing import List
from pyaskit import defun_hinted, define_hinted

largest_prime_factor = defun_hinted(
    int,
    {'n': int},
    """Return the largest prime factor of {{n}}. Assume {{n}} > 1 and is not a prime.
    """,
    training_examples=[
        {"input": {"n": 13195}, "output": 29},
        {"input": {"n": 2048}, "output": 2}]
    ).compile(
        test_examples=[
            {"input": {"n": 15}, "output": 5},
            {"input": {"n": 27}, "output": 3},
            {"input": {"n": 63}, "output": 7},
            {"input": {"n": 330}, "output": 11},
            {"input": {"n": 13195}, "output": 29},
        ]
    )
