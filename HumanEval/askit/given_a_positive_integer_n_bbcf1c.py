# Recompilation count: 0
from typing import List

  
def given_a_positive_integer_n_bbcf1c(n: int) -> List[int]:
    collatz_sequence = []
    while n != 1:
        if n % 2 == 0:
            n = n / 2
        else:
            collatz_sequence.append(n)
            n = 3 * n + 1
    collatz_sequence.append(n)
    collatz_sequence.sort()
    
    return collatz_sequence