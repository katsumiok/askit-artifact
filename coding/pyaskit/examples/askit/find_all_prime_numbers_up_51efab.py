# Recompilation count: 0
from typing import List


def find_all_prime_numbers_up_51efab(n) -> List[int]:
    # Function to check if a number is prime
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False
        return True

    primes = []
    for num in range(2, n + 1):
        if is_prime(num):
            primes.append(num)
    return primes