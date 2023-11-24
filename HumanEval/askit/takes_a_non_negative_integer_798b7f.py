# Recompilation count: 0
from typing import List


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def takes_a_non_negative_integer_798b7f(n: int) -> List[int]:
    # Takes a non-negative integer 'n' and returns an array of the first 'n'
    # integers that are prime numbers and less than 'n'.
    primes = []
    for i in range(n):
        if is_prime(i):
            primes.append(i)
    return primes