# Recompilation count: 0
import math

def returns_true_if_the_given_eff04b(a: int) -> bool:
    def is_prime(n):
        # Returns True if 'n' is a prime number
        if n<=1:
            return False
        if n<=3:
            return True
        if n%2==0 or n%3==0:
            return False
        i=5
        while(i * i <= n):
            if (n % i == 0 or n % (i + 2) == 0):
                return False
            i += 6
        return True

    def prime_factors(n):
        # Returns a list of prime factor of 'n'
        factors = []
        # Print the number of two's that divide n
        while n % 2 == 0:
            factors.append(2),
            n = n / 2
            
        # n must be odd at this point so we skip 2
        for i in range(3,int(math.sqrt(n))+1,2):
            # While i divides n , append i and divide n
            while n % i== 0:
                factors.append(i),
                n = n / i
                 
        # Condition if n is a prime number greater than 2
        if n > 2:
            factors.append(int(n))
        
        return factors

    prime_factors_a = prime_factors(a)
    primes = [factor for factor in prime_factors_a if is_prime(factor)]

    return len(primes) == 3