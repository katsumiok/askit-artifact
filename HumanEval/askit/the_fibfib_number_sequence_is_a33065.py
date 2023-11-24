# Recompilation count: 0
def the_fibfib_number_sequence_is_a33065(n: int) -> int:
    # The FibFib number sequence is a sequence similar to the Fibbonacci sequnece that's defined as follows:
    # fibfib(0) == 0
    # fibfib(1) == 0
    # fibfib(2) == 1
    # fibfib('n') == fibfib('n'-1) + fibfib('n'-2) + fibfib('n'-3).
    # Please write a function to efficiently compute the n-th element of the fibfib number sequence.
    
    if (n == 0):
        return 0
    elif (n == 1):
        return 0
    elif (n == 2):
        return 1
    else:
        fibfib = [0, 0, 1]
        
        for i in range(3, n+1):
            fibfib.append(fibfib[i-1] + fibfib[i-2] + fibfib[i-3])
        
        return fibfib[n]