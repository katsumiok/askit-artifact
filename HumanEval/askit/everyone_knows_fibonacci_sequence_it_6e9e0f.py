# Recompilation count: 2
from typing import List


def everyone_knows_fibonacci_sequence_it_6e9e0f(n) -> List[float]:
    if n < 0:
        return []
    
    tribonacci = [1, 3]
    while len(tribonacci) < n + 1:
        if len(tribonacci) % 2 == 0:
            tribonacci.append(1 + len(tribonacci) / 2)
        else:
            tribonacci.append(tribonacci[-1] + tribonacci[-2] + (1 + (len(tribonacci) + 1) / 2))
            
    return tribonacci[:n+1]