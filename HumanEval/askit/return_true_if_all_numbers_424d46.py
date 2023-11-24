# Recompilation count: 0
from typing import List


def return_true_if_all_numbers_424d46(l: List[int], t: int) -> bool:
    # Return True if all numbers in the list 'l' are below threshold 't'.
    return all(i < t for i in l)