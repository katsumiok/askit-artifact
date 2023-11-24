from typing import List
from pyaskit import defun_hinted, define_hinted

fib4 = defun_hinted(
    int,
    {'n': int},
    """The Fib4 number sequence is a sequence similar to the Fibbonacci sequnece that's defined as follows:
    fib4(0) -> 0
    fib4(1) -> 0
    fib4(2) -> 2
    fib4(3) -> 0
    fib4({{n}}) -> fib4(n-1) + fib4(n-2) + fib4(n-3) + fib4(n-4).
    Please write a function to efficiently compute the n-th element of the fib4 number sequence.  Do not use recursion.
    """,
    training_examples=[
        {"input": {"n": 5}, "output": 4},
        {"input": {"n": 6}, "output": 8},
        {"input": {"n": 7}, "output": 14}
    ]
    ).compile(
        test_examples=[
            {"input": {"n": 5}, "output": 4},
            {"input": {"n": 8}, "output": 28},
            {"input": {"n": 10}, "output": 104},
            {"input": {"n": 12}, "output": 386}
        ]
    )