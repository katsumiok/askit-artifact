# Recompilation count: 0
def liam_is_x1_years_old_002abe(x1) -> int:
    # Liam is'x1'years old now. Two years ago, Liam’s age was twice the age of Vince. How old is Vince now?
    # Two years ago, Liam was x1-2 years old
    # At that time, Vince was half of Liam's age
    vince_age = (x1 - 2) / 2
    # Now, Vince is two years older
    vince_now = vince_age + 2
    return int(vince_now)