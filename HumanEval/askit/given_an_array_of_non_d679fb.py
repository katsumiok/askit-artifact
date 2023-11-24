# Recompilation count: 0
from typing import List

def given_an_array_of_non_d679fb(array: List[int]) -> List[int]:

    if not array: # if array is empty
        return []
    
    # Copy the array so the original is not altered.
    copy_array = array.copy()
    
    # Sort array
    copy_array.sort()
    
    # Check if sum of first and last element is even or odd
    if (array[0] + array[-1]) % 2 == 0:
        # If even, sort in descending order
        copy_array.reverse()
        
    return copy_array