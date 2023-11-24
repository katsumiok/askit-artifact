# Recompilation count: 0
def find_the_factorial_of_n_c8ae6f(n) -> int:
    # Find the factorial of 'n'.
    factorial = 1
    for i in range(1, n+1):
        factorial *= i
    return factorial