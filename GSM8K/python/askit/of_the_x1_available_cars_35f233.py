# Recompilation count: 0
def of_the_x1_available_cars_35f233(x1, x2, x3) -> int:
    # Of the 'x1' available cars for rent, 'x2' are automatic cars, 'x3' are manual cars, and the rest are semi-automatic. What percentage of the cars are semi-automatic?
    semi_automatic = x1 - x2 - x3
    percentage_semi_automatic = (semi_automatic / x1) * 100
    return int(percentage_semi_automatic)