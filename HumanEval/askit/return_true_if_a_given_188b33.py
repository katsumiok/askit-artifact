# Recompilation count: 0
def return_true_if_a_given_188b33(n) -> bool:
    # Return true if a given number 'n' is prime, and false otherwise.

    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
        
    i = 5
    while(i * i <= n):
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i = i + 6
        
    return True