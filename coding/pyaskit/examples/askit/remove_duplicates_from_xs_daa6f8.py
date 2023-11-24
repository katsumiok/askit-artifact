# Recompilation count: 0
from typing import List


def remove_duplicates_from_xs_daa6f8(xs) -> List[int]:
    # Remove duplicates from 'xs'.
    unique_xs = list(set(xs))
    unique_xs.sort()
    return unique_xs