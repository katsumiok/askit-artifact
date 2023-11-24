# Recompilation count: 0
def tom_s_restaurant_gets_x1_110004(x1: int, x2: int, x3: int) -> int:
    # calculate the total income from meals and wine per night
    income_per_night = x1 * (x2 * 5 + 5)
    # calculate and return the total income per week
    total_income_per_week = income_per_night * x3
    return total_income_per_week