# Recompilation count: 1
from typing import List

def given_a_non_empty_array_de4bbf(arr: List[int], k: int) -> int:
    # Given a non-empty array of integers 'arr' and an integer 'k', return
    # the sum of the elements with at most two digits from the first 'k' elements of 'arr'.

    # Constraints:
    # 1. 1 <= len('arr') <= 100
    # 2. 1 <= 'k' <= len('arr')
    
    return sum(x for x in arr[:k] if -10 <= x <= 99)