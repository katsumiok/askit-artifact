from typing import Tuple
from pyaskit import defun_hinted, define_hinted

even_odd_count = define_hinted(
    Tuple[int, int],
    """Given an integer {{num}}. return a tuple that has the number of even and odd digits respectively.""",
    training_examples=[
        {"input": {"num": -12}, "output": (1, 1)},
        {"input": {"num": 123}, "output": (1, 2)}]
    ).compile(
        test_examples=[
            {"input": {"num": 7}, "output": (0, 1)},
            {"input": {"num": -78}, "output": (1, 1)},
            {"input": {"num": 3452}, "output": (2, 2)},
            {"input": {"num": 346211}, "output": (3, 3)},
            {"input": {"num": -345821}, "output": (3, 3)},
            {"input": {"num": -2}, "output": (1, 0)},
            {"input": {"num": -45347}, "output": (2, 3)},
            {"input": {"num": 0}, "output": (1, 0)}]
    )
