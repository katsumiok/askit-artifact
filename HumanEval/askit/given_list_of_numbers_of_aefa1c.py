# Recompilation count: 0
from typing import List

def given_list_of_numbers_of_aefa1c(numbers: List[float]) -> List[float]:
    #  Given list of numbers (of at least two elements) 'numbers', apply a linear transform to that list,
    # such that the smallest number will become 0 and the largest will become 1
    
    min_num = min(numbers)
    max_num = max(numbers)
    range_num = max_num - min_num
    
    return [(num - min_num) / range_num for num in numbers]