# Recompilation count: 0
def return_the_largest_prime_factor_2f92a3(n: int) -> int:
    prime_factor = 1
    i = 2

    while i <= n / i:
        if n % i == 0:
            prime_factor = i
            n /= i
        else:
            i += 1

    if prime_factor < n:
        prime_factor = n

    return int(prime_factor)