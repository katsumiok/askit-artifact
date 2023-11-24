from typing import List, Tuple
from pyaskit import defun_hinted, define_hinted

find_closest_elements = defun_hinted(
    Tuple[float, float],
    {'numbers': List[float]},
    """ From a supplied list of {{numbers}} (of length at least two) select and return two that are the closest to each
    other and return them in order (smaller number, larger number).
    """,
    training_examples=[
        {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0, 2.2]}, "output": (2.0, 2.2)},
        {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0, 2.0]}, "output": (2.0, 2.0)}]
    ).compile(
        test_examples=[
            {"input": {"numbers": [1.0, 2.0, 3.9, 4.0, 5.0, 2.2]}, "output": (3.9, 4.0)},
            {"input": {"numbers": [1.0, 2.0, 5.9, 4.0, 5.0]}, "output": (5.0, 5.9)},
            {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0, 2.2]}, "output": (2.0, 2.2)},
            {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0, 2.0]}, "output": (2.0, 2.0)},
            {"input": {"numbers": [1.1, 2.2, 3.1, 4.1, 5.1]}, "output": (2.2, 3.1)}]
    )
