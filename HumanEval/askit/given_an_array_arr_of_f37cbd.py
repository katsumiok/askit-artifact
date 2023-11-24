# Recompilation count: 6
from typing import List

def given_an_array_arr_of_f37cbd(arr: List[int], k: int) -> List[int]:
    #  Given an array 'arr' of integers and a positive integer 'k', return a sorted list 
    #  of length 'k' with the maximum k numbers in 'arr'.
    #  Note: 0 <= 'k' <= len(arr)
    
    # Sort list in descending order and slice first 'k' numbers
    sorted_arr = sorted(arr, reverse=True)[:k]
    
    # Sort the highest 'k' numbers in ascending order
    result = sorted(sorted_arr)
    
    return result