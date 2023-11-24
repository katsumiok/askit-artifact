# Recompilation count: 0
from typing import List, Tuple


def from_a_supplied_list_of_219163(numbers: List[float]) -> Tuple[float, float]:
    #  From a supplied list of 'numbers' (of length at least two) select and return two that are the closest to each other and return them in order (smaller number, larger number).
    
    min_diff = float('inf')
    closest_pair = None
    
    sorted_numbers = sorted(numbers)
    
    for i in range(len(sorted_numbers) - 1):
        diff = sorted_numbers[i+1] - sorted_numbers[i]
        if diff < min_diff:
            min_diff = diff
            closest_pair = (sorted_numbers[i], sorted_numbers[i+1])
            
    return closest_pair