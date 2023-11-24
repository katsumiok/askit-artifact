# Recompilation count: 0
from typing import List

def given_a_positive_integer_n_c045bc(n: int) -> List[int]:
    # Given a positive integer 'n', you have to make a pile of n levels of stones.
    # The first level has n stones.
    # The number of stones in the next level is:
    #     - the next odd number if n is odd.
    #     - the next even number if n is even.
    # Return the number of stones in each level in a list, where element at index
    # i represents the number of stones in the level (i+1).
    stones = []
    for _ in range(n):
        stones.append(n)
        n = n + 2 if n % 2 == 1 else n + 2
    return stones