from typing import List
from pyaskit import defun_hinted, define_hinted

tri = define_hinted(
    List[float],
    """Everyone knows Fibonacci sequence, it was studied deeply by mathematicians in 
    the last couple centuries. However, what people don't know is Tribonacci sequence.
    Tribonacci sequence is defined by the recurrence:
    tri(1) = 3
    tri(n) = 1 + n / 2, if n is even.
    tri(n) =  tri(n - 1) + tri(n - 2) + tri(n + 1), if n is odd.
    You are given a non-negative integer number {{n}}, you have to a return a list of the 
    first {{n}} + 1 numbers of the Tribonacci sequence.
    Examples:
    
    You can also note tribonacci series starts at 0, so you will always get n+1 elements.
    """,
    training_examples=[
        {"input": {"n": 3}, "output": [1, 3, 2, 8]}]
    ).compile(
    test_examples=[
        {"input": {"n": 4}, "output": [1, 3, 2.0, 8.0, 3.0]},
        {"input": {"n": 5}, "output": [1, 3, 2.0, 8.0, 3.0, 15.0]},
        {"input": {"n": 6}, "output": [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0]},
        {"input": {"n": 7}, "output": [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0]},
        {"input": {"n": 8}, "output": [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0]},
        {"input": {"n": 9}, "output": [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0, 35.0]},
        {"input": {"n": 20}, "output": [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0, 35.0, 6.0, 48.0, 7.0, 63.0, 8.0, 80.0, 9.0, 99.0, 10.0, 120.0, 11.0]},
        {"input": {"n": 0}, "output": [1]},
        {"input": {"n": 1}, "output": [1, 3]}]
    )
