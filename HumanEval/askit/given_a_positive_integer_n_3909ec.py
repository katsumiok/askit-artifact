# Recompilation count: 0
from typing import Tuple

def given_a_positive_integer_n_3909ec(n: int) -> Tuple[int, int]:
    # check if a number is palindrome
    def is_palindrome(x):
        return str(x) == str(x)[::-1]
    
    evens = odds = 0
    for i in range(1, n+1):
        if is_palindrome(i):
            if i % 2 == 0:
                evens += 1
            else:
                odds += 1

    return evens, odds