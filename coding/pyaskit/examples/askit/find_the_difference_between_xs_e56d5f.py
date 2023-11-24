# Recompilation count: 0
from typing import List, Set


def find_the_difference_between_xs_e56d5f(xs, ys) -> List[str]:
    # Find the difference between 'xs' and 'ys'.
    difference = set(xs) - set(ys)
    return list(difference)