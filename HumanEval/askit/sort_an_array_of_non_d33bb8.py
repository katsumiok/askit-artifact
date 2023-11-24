# Recompilation count: 0
from typing import List

def sort_an_array_of_non_d33bb8(arr: List[int]) -> List[int]:
    # sort the array based on the number of 1's in binary representation, then by the number itself
    # use a custom key for sorting, where the first element is the count of '1's and second is the number itself
    arr.sort(key=lambda x: (bin(x).count('1'), x))
    return arr