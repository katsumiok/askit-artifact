# Recompilation count: 0
def an_ice_cream_factory_makes_489e48(x1, x2, x3, x4, x5) -> int:
    # An ice cream factory makes'x1'quarts of chocolate ice cream in'x2'hours.  It can make'x3'quarts of vanilla ice cream in'x4'hours.  How many quarts in total would be made in'x5'hours?

    # First, calculate how many quarts of chocolate ice cream can be made in one hour
    chocolate_per_hour = x1 / x2

    # Then, calculate how many quarts of vanilla ice cream can be made in one hour
    vanilla_per_hour = x3 / x4

    # Total quarts that can be made in one hour
    total_quarts_per_hour = chocolate_per_hour + vanilla_per_hour 

    # Multiply by 'x5' to find out how many quarts can be made in 'x5' hours
    total_quarts = total_quarts_per_hour * x5

    return round(total_quarts)   # Return the result, rounded to the nearest whole number, because quarts cannot be in fractions.