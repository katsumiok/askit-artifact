# Recompilation count: 0
from typing import List
from math import factorial

def takes_n_as_a_parameter_60b557(n: int) -> List[int]:
    # initialize an empty list
    res = []
    
    for i in range(n):
        # as 'i' starts from 1 in the problem statement,
        # we need to consider i+1 instead of i in our calculations
        val = i + 1
        
        if val % 2 == 0:
            # if the index is even, calculate the factorial
            res.append(factorial(val))
        else:
            # if the index is odd, calculate the sum of numbers from 1 to i
            res.append(sum(range(1, val + 1)))
            
    return res