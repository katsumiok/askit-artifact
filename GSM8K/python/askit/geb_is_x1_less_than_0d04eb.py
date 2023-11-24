# Recompilation count: 1
def geb_is_x1_less_than_0d04eb(x1, x2) -> int:
    # Geb is'x1'less than half the age of Haley. If Haley is'x2'years old, how old is Geb?
    # Here x2 is Haley's age, and Geb is less than half of Haley's age by x1 years.
    geb_age = x2/2 - x1
    return int(geb_age)