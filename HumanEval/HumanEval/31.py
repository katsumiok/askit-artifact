from typing import List
from pyaskit import defun_hinted, define_hinted

is_prime = define_hinted(
    bool,
    """
    Return true if a given number {{n}} is prime, and false otherwise.
    """,
    training_examples=[
        {"input": {"n": 6}, "output": False},
        {"input": {"n": 101}, "output": True},
        {"input": {"n": 11}, "output": True},
        {"input": {"n": 13441}, "output": True},
        {"input": {"n": 61}, "output": True},
        {"input": {"n": 4}, "output": False},
        {"input": {"n": 1}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"n": 6}, "output": False},
            {"input": {"n": 101}, "output": True},
            {"input": {"n": 11}, "output": True},
            {"input": {"n": 13441}, "output": True},
            {"input": {"n": 61}, "output": True},
            {"input": {"n": 4}, "output": False},
            {"input": {"n": 1}, "output": False},
            {"input": {"n": 5}, "output": True},
            {"input": {"n": 11}, "output": True},
            {"input": {"n": 17}, "output": True},
            {"input": {"n": 5 * 17}, "output": False},
            {"input": {"n": 11 * 7}, "output": False},
            {"input": {"n": 13441 * 19}, "output": False}]
    )
