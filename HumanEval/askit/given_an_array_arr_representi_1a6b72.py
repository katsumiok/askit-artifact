# Recompilation count: 0
from typing import List

def given_an_array_arr_representi_1a6b72(arr:List[int]) -> List[int]:
    # find the smallest even number and its index
    smallest_even = None
    smallest_index = None
    for i, num in enumerate(arr):
        if num % 2 == 0: # check if number is even
            if smallest_even is None or num < smallest_even: # if number is smaller than smallest even
                smallest_even = num
                smallest_index = i
    if smallest_even is not None:
        return [smallest_even, smallest_index]
    else:
        return []