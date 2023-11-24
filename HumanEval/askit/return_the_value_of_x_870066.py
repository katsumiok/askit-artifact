# Recompilation count: 0
def return_the_value_of_x_870066(x: int, n: int, y: int) -> int:
    # Return the value of 'x' if 'n' is a prime number and return the value of 'y' otherwise.

    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, num):
            if num % i == 0:
                return False
        return True

    return x if is_prime(n) else y