# Recompilation count: 0
def for_a_given_number_n_a6649b(n: int) -> int:
    #  For a given number 'n', find the largest number that divides 'n' evenly, smaller than 'n'
    for i in range(n-1, 0, -1):
        if n % i == 0:
            return i