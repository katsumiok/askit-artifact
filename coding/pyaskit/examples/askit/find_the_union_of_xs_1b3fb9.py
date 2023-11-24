# Recompilation count: 0
from typing import List


def find_the_union_of_xs_1b3fb9(xs, ys) -> List[int]:
    # Find the union of 'xs' and 'ys'.
    union = list(set(xs) | set(ys))
    return union