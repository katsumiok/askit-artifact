# Recompilation count: 7
from typing import List

def generate_the_fibonacci_sequence_up_d74fb8(n) -> List[int]:
    # Generate the Fibonacci sequence up to 'n'.
    sequence = []
    a, b = 0, 1
    while a < n:
        sequence.append(a)
        a, b = b, a + b
    return sequence