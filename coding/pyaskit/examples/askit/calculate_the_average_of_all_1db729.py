# Recompilation count: 0


def calculate_the_average_of_all_1db729(ns) -> int:
    # Calculate the average of all numbers in 'ns'.
    if len(ns) == 0:
        return 0
    sumOfNumbers = sum(ns)
    return sumOfNumbers // len(ns)