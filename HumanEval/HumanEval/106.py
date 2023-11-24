from typing import List
from pyaskit import defun_hinted, define_hinted

f = define_hinted(
    List[int],
    """
    Takes {{n}} as a parameter,
    and returns a list of size {{n}}, such that the value of the element at index i is the factorial of i if i is even
    or the sum of numbers from 1 to i otherwise.
    i starts from 1.
    the factorial of i is the multiplication of the numbers from 1 to i (1 * 2 * ... * i).
    """,
    training_examples=[
        {"input": {"n": 5}, "output": [1, 2, 6, 24, 15]}]
    ).compile(
        test_examples=[
            {"input": {"n": 5}, "output": [1, 2, 6, 24, 15]},
            {"input": {"n": 7}, "output": [1, 2, 6, 24, 15, 720, 28]},
            {"input": {"n": 1}, "output": [1]},
            {"input": {"n": 3}, "output": [1, 2, 6]}]
    )
