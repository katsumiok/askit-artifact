# Recompilation count: 0
from typing import List


def insert_a_number_delimeter_between_318924(delimeter: int, numbers: List[int]) -> List[int]:
    #  Insert a number 'delimeter' between every two consecutive elements of input list 'numbers'
    
    if not numbers:
        return numbers
    
    result = [numbers[0]]
    for num in numbers[1:]:
        result.append(delimeter)
        result.append(num)
    
    return result