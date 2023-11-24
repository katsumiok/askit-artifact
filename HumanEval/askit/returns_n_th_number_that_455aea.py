# Recompilation count: 0
def is_prime(n):
    # Helper function to check if a number is prime
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

def fibonacci(n):
    # Helper function to generate n-th Fibonacci number
    if n < 0:
        return "Incorrect input"
    elif n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        a, b = 1, 1
        for i in range(n - 1):
            a, b = b, a + b
        return a

def returns_n_th_number_that_455aea(n: int) -> int:
    count = 0
    fib_number = 0
    index = 1
    while count < n:
        fib_number = fibonacci(index)
        if is_prime(fib_number):
            count += 1
        index += 1
    return fib_number