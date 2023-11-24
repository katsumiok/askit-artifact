# Recompilation count: 0
def given_a_positive_integer_n_4d3c42(n) -> int:
    product = 1
    odd_exist = False
    while n > 0:
        digit = n % 10
        if digit % 2 != 0:
            product *= digit
            odd_exist = True
        n //= 10
    return product if odd_exist else 0