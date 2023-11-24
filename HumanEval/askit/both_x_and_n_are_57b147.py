# Recompilation count: 0
def both_x_and_n_are_57b147(x: str, n: str) -> bool:
    # Both 'x' and 'n', are string representation of a fraction, and have the following format,
    # where both numerator and denominator are positive whole numbers.
    # The function returns True if the result of 'x' * 'n' evaluates to a whole number and False otherwise.
    # You can assume that both 'x', and 'n' are valid fractions, and do not have zero as a denominator.
    x_num, x_den = map(int, x.split('/'))
    n_num, n_den = map(int, n.split('/'))
    
    # Calculate the multiplication of these two fractions
    result = (x_num * n_num) / (x_den * n_den)
    
    # Check if the result is a whole number
    if result.is_integer():
        return True
    else:
        return False