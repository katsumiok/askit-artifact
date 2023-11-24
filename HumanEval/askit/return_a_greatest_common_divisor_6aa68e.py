# Recompilation count: 0
def return_a_greatest_common_divisor_6aa68e(a: int, b: int) -> int:
    #  Return a greatest common divisor of two integers 'a' and 'b'
    
    # If b is 0, then the GCD is a
    if b==0:
        return a
    # Recursively call the function with b and the remainder of a divided by b
    else:
        return return_a_greatest_common_divisor_6aa68e(b, a%b)