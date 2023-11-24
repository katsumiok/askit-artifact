from typing import List
from pyaskit import defun_hinted, define_hinted

fibfib = defun_hinted(
    int,
    {'n': int},
    """The FibFib number sequence is a sequence similar to the Fibbonacci sequnece that's defined as follows:
    fibfib(0) == 0
    fibfib(1) == 0
    fibfib(2) == 1
    fibfib({{n}}) == fibfib({{n}}-1) + fibfib({{n}}-2) + fibfib({{n}}-3).
    Please write a function to efficiently compute the n-th element of the fibfib number sequence.
    """,
    training_examples=[
        {"input": {"n": 1}, "output": 0},
        {"input": {"n": 5}, "output": 4},
        {"input": {"n": 8}, "output": 24}]
    ).compile(
        test_examples=[
            {"input": {"n": 2}, "output": 1},
            {"input": {"n": 1}, "output": 0},
            {"input": {"n": 5}, "output": 4},
            {"input": {"n": 8}, "output": 24},
            {"input": {"n": 10}, "output": 81},
            {"input": {"n": 12}, "output": 274},
            {"input": {"n": 14}, "output": 927},]
    )
