from typing import List
from pyaskit import defun_hinted

factorize = defun_hinted(
    List[int],
    {'n': int},
    """ Return list of prime factors of given integer {{n}} in the order from smallest to largest.
    Each of the factors should be listed number of times corresponding to how many times it appeares in factorization.
    Input number should be equal to the product of all factors
    """,
    training_examples=[
        {"input": {"n": 8}, "output": [2, 2, 2]},
        {"input": {"n": 25}, "output": [5, 5]},
        {"input": {"n": 70}, "output": [2, 5, 7]}]
    ).compile(
        test_examples=[
            {"input": {"n": 2}, "output": [2]},
            {"input": {"n": 4}, "output": [2, 2]},
            {"input": {"n": 8}, "output": [2, 2, 2]},
            {"input": {"n": 3 * 19}, "output": [3, 19]},
            {"input": {"n": 3 * 19 * 3 * 19}, "output": [3, 3, 19, 19]},
            {"input": {"n": 3 * 19 * 3 * 19 * 3 * 19}, "output": [3, 3, 3, 19, 19, 19]},
            {"input": {"n": 3 * 19 * 19 * 19}, "output": [3, 19, 19, 19]},
            {"input": {"n": 3 * 2 * 3}, "output": [2, 3, 3]}
        ]
    )
