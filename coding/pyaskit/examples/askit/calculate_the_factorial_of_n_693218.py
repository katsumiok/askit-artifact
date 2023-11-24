# Recompilation count: 0


def calculate_the_factorial_of_n_693218(n) -> int:
    # Calculate the factorial of 'n'.
    factorial = 1
    for i in range(1, n+1):
        factorial *= i
    return factorial