# Recompilation count: 0
def you_are_given_a_list_a15a41(lst) -> int:
    def isPrime(n):
        if n <= 1:
            return False
        if n == 2:
            return True
        if n%2 == 0:
            return False
        sqr = int(n**0.5)+1
        for divisor in range(3, sqr, 2):
            if n%divisor == 0:
                return False
        return True

    max_prime = 0
    for num in lst:
        if isPrime(num) and num > max_prime:
            max_prime = num

    return sum(map(int, str(max_prime)))