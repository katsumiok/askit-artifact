from typing import List
from pyaskit import defun_hinted, define_hinted

get_odd_collatz = defun_hinted(
    List[int],
    {'n': int},
    """
    Given a positive integer {{n}}, return a sorted list that has the odd numbers in collatz sequence.

    The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined
    as follows: start with any positive integer n. Then each term is obtained from the 
    previous term as follows: if the previous term is even, the next term is one half of 
    the previous term. If the previous term is odd, the next term is 3 times the previous
    term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1.

    Note: 
        1. Collatz(1) is [1].
        2. returned list sorted in increasing order.

    For example:
    get_odd_collatz(5) returns [1, 5] # The collatz sequence for 5 is [5, 16, 8, 4, 2, 1], so the odd numbers are only 1, and 5.
    """,
    training_examples=[
        {"input": {"n": 5}, "output": [1, 5]}]
    ).compile(
    test_examples=[
        {"input": {"n": 14}, "output": [1, 5, 7, 11, 13, 17]},
        {"input": {"n": 12}, "output": [1, 3, 5]},
        {"input": {"n": 1}, "output": [1]}]
    )