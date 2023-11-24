# Recompilation count: 0
from typing import List

def return_sorted_unique_common_elements_5fdbc1(l1: List[int], l2: List[int]) -> List[int]:
    # Return sorted unique common elements for two lists 'l1' and 'l2'.
    common_elements = list(set(l1) & set(l2))
    return sorted(common_elements)

# Testing function
print(return_sorted_unique_common_elements_5fdbc1([1, 4, 3, 34, 653, 2, 5], [5, 7, 1, 5, 9, 653, 121]))
print(return_sorted_unique_common_elements_5fdbc1([5, 3, 2, 8], [3, 2]))