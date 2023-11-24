# Recompilation count: 0
def check_if_n_is_a_d44344(n) -> bool:
    # Check if 'n' is a prime number.
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True