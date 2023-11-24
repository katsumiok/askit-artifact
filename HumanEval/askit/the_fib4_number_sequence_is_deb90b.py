# Recompilation count: 0
def the_fib4_number_sequence_is_deb90b(n: int) -> int:
    # The Fib4 number sequence is a sequence similar to the Fibbonacci sequnece that's defined as follows:
    # fib4(0) -> 0
    # fib4(1) -> 0
    # fib4(2) -> 2
    # fib4(3) -> 0
    # fib4('n') -> fib4(n-1) + fib4(n-2) + fib4(n-3) + fib4(n-4).
    # Please write a function to efficiently compute the n-th element of the fib4 number sequence.  Do not use recursion.
    
    # Start with the defined base cases
    if n == 0 or n == 1 or n == 3:
        return 0
    elif n == 2:
        return 2

    # Initialize variables that will hold the previous 4 fib4 values
    fib4_n_minus_4 = 0
    fib4_n_minus_3 = 0
    fib4_n_minus_2 = 2
    fib4_n_minus_1 = 0

    # Use a loop to iteratively calculate each fib4 value, updating the saved previous values as we go
    for _ in range(4, n+1):
        fib4_n = fib4_n_minus_1 + fib4_n_minus_2 + fib4_n_minus_3 + fib4_n_minus_4 
        fib4_n_minus_4, fib4_n_minus_3, fib4_n_minus_2, fib4_n_minus_1 = fib4_n_minus_3, fib4_n_minus_2, fib4_n_minus_1, fib4_n

    return fib4_n