# Recompilation count: 1
from typing import List

def takes_two_lists_lst1_and_9a18a6(lst1: List[int], lst2: List[int]) -> str:

    odd_numbers_in_lst1 = [i for i in lst1 if i % 2 != 0]
    even_numbers_in_lst2 = [i for i in lst2 if i % 2 == 0]

    if len(odd_numbers_in_lst1) <= len(even_numbers_in_lst2):
        return 'YES'

    return 'NO'