# Recompilation count: 0
from typing import List

def from_a_list_of_integers_dc32df(numbers: List[int]) -> List[int]:
    #  From a list of integers 'numbers', remove all elements that occur more than once.
    # Keep order of elements left the same as in the input.
    
    result = []
    count_dict = {}

    for num in numbers:
        if num in count_dict:
            count_dict[num] += 1
        else:
            count_dict[num] = 1

    for num in numbers:
        if count_dict[num] == 1:
            result.append(num)
    return result