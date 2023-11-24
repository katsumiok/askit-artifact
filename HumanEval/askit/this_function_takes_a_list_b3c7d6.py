# Recompilation count: 0
from typing import List

def this_function_takes_a_list_b3c7d6(l: List[int]) -> List[int]:
    # get values at indicies that are divisible by three
    by_three = [l[i] for i in range(0, len(l), 3)]
    # sort these values
    by_three_sorted = sorted(by_three)

    # replace values in the original list with sorted ones
    j = 0
    for i in range(0, len(l), 3):
        l[i] = by_three_sorted[j]
        j += 1
        
    return l