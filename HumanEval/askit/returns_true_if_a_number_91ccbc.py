# Recompilation count: 0
import math

def returns_true_if_a_number_91ccbc(x: int, n: int) -> bool:
    # Check if 'n' is 1, because the logarithm base 1 is undefined. 
    # 'x' can never be a simple power of 1 unless 'x' is also 1.
    if n == 1:  
        return x == 1
    
    # calculate the logarithm base 'n' of 'x'
    log_val = math.log(x, n)

    # check if log_val is an integer within an acceptable precision
    # if it is, 'x' can be obtained by raising 'n' to an integer power
    return math.isclose(log_val, round(log_val), rel_tol=1e-9)