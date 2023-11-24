# Recompilation count: 0
from typing import List

def from_a_given_list_of_da7b7f(numbers: List[int]) -> List[int]:
    #  From a given list of integers 'numbers', generate a list of rolling maximum element found until given moment in the sequence.
    result = []
    current_max = None
    for num in numbers:
        if current_max is None or num > current_max:
            current_max = num
        result.append(current_max)
    return result