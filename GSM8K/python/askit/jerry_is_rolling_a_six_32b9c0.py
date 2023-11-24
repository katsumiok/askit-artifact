# Recompilation count: 0
def jerry_is_rolling_a_six_32b9c0(x1) -> int:
    # the probability to roll a number greater than 'x1' on a six-sided die is (6-x1)/6
    greater_than_x1_probability = (6-x1) / 6
    # the probability to roll two even numbers in a row on a six-sided die is (1/2 * 1/2) = 1/4
    two_even_numbers_probability = 1/4
    # the difference between these probabilities (expressed as a percentage)
    result = (greater_than_x1_probability - two_even_numbers_probability) * 100
    return int(result)