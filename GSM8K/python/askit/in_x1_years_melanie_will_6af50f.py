# Recompilation count: 0
def in_x1_years_melanie_will_6af50f(x1, x2) -> int:
    # 'x1' years from now, Melanie will be 'x2' years old.
    # We first calculate her present age.
    present_age = x2 - x1

    # Now we know her present age, we need to find out when she will be thrice this age.
    # So we subtract her present age from thrice her present age to get the number of years needed.
    years_needed = (3 * present_age) - present_age

    return years_needed