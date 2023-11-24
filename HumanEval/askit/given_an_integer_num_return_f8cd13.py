# Recompilation count: 0
from typing import Tuple

def given_an_integer_num_return_f8cd13(num) -> Tuple[int, int]:
    num_str = str(abs(num))  # Convert num to string, take absolute value for negative numbers

    odd_count = 0
    even_count = 0

    for digit in num_str:
        if int(digit) % 2 == 0:  # Check if digit is even
            even_count += 1
        else:  # Digit is odd
            odd_count += 1

    return (even_count, odd_count)