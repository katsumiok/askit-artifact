# Recompilation count: 0
def complete_the_function_that_takes_c358e1(a: int, b: int) -> int:
    # Get the unit digits from both 'a' and 'b'
    a_unit_digit = abs(a) % 10
    b_unit_digit = abs(b) % 10

    # Return the product of unit digits.
    return a_unit_digit * b_unit_digit