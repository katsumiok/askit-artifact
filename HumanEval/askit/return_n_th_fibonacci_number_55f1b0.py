# Recompilation count: 0
def return_n_th_fibonacci_number_55f1b0(n: int) -> int:
    # Return n-th Fibonacci number where 'n' is an integer.
    if n==1 or n==2:
        return 1
    else:
        a, b = 1, 1
        for i in range(n - 2):
            a, b = b, a + b
        return b