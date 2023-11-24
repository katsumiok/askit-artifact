# Recompilation count: 0
from typing import List

def for_a_given_list_of_be6930(numbers: List[float]) -> float:
    mean = sum(numbers) / len(numbers)  # Calculate mean of the list
    abs_diff = [abs(n - mean) for n in numbers]  # Calculate absolute difference from the mean for each number
    return sum(abs_diff) / len(numbers)  # Return mean absolute deviation