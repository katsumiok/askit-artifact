# Recompilation count: 0
from typing import List


def accepts_two_lists_of_strings_b41749(lst1: List[str], lst2: List[str]) -> List[str]:
    # Get the sum of lengths of all strings in both lists
    sum_lst1 = sum(len(s) for s in lst1)
    sum_lst2 = sum(len(s) for s in lst2)

    # Compare the sums and return the list with the smaller sum
    # If the sums are equal, return the first list
    if sum_lst1 <= sum_lst2:
        return lst1
    else:
        return lst2