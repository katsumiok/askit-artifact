# Recompilation count: 3
from typing import List

def given_two_positive_integers_a_07d9c4(a: int, b: int) -> List[int]:
    # Given two positive integers 'a' and 'b', return the even digits between 'a' and 'b', in ascending order.
    if a > b: # handling reverse order
        a, b = b, a
    return [i for i in range(a, b+1) if i%2==0 and 0<=i<=9]