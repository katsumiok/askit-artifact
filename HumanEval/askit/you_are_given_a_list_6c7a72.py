# Recompilation count: 0
import math

def you_are_given_a_list_6c7a72(lst: list) -> int:
    # round each element up and find the square, then return the sum
    return sum((math.ceil(num) ** 2) for num in lst)