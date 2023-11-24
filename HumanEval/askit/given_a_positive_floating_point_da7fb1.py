# Recompilation count: 0
def given_a_positive_floating_point_da7fb1(number: float) -> float:
    # Given a positive floating point 'number', it can be decomposed into
    # an integer part (largest integer smaller than given number) and decimals
    # (leftover part always smaller than 1).
    import math

    # Return the decimal part of the 'number'.
    return round(number - math.floor(number), 2)