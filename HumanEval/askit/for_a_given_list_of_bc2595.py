# Recompilation count: 0
from typing import List, Tuple

def for_a_given_list_of_bc2595(numbers: List[int]) -> Tuple[int, int]:
    #  For a given list of integers 'numbers', return a tuple consisting of a sum and a product of all the integers in a list.
    # Empty sum should be equal to 0 and empty product should be equal to 1.

    if not numbers:
        return (0, 1)
    else:
        sum_of_numbers = sum(numbers)
        product_of_numbers = 1
        for number in numbers:
            product_of_numbers *= number
        return (sum_of_numbers, product_of_numbers)