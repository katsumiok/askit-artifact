# Recompilation count: 0
def find_the_greatest_common_divisor_0e8890(a, b) -> int:
    # Find the greatest common divisor of 'a' and 'b'.
    while b != 0:
        a, b = b, a % b

    return a