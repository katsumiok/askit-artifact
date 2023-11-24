from typing import List, Tuple
from pyaskit import defun_hinted, define_hinted

sum_product = defun_hinted(
    Tuple[int, int],
    {'numbers': List[int]},
    """ For a given list of integers {{numbers}}, return a tuple consisting of a sum and a product of all the integers in a list.
    Empty sum should be equal to 0 and empty product should be equal to 1.
    """,
    training_examples=[
        {"input": {"numbers": []}, "output": (0,1)},
        {"input": {"numbers": [1,2,3,4]}, "output": (10,24)}]
    ).compile(
        test_examples=[
            {"input": {"numbers": []}, "output": (0, 1)},
            {"input": {"numbers": [1,1,1]}, "output": (3,1)},
            {"input": {"numbers": [100, 0]}, "output": (100, 0)},
            {"input": {"numbers": [3,5,7]}, "output": (15,105)},
            {"input": {"numbers": [10]}, "output": (10,10)},
        ]
    )