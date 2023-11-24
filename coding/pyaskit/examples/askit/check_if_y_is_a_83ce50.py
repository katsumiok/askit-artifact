# Recompilation count: 0
def check_if_y_is_a_83ce50(y) -> bool:
    # Check if 'y' is a leap year.
    return y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)