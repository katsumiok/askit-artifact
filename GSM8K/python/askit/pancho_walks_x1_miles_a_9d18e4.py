# Recompilation count: 0
def pancho_walks_x1_miles_a_9d18e4(x1, x2) -> int:
    # Pancho walks 'x1' miles a day on weekdays and 'x2' miles on weekends. 
    # Thus, he walks 5 days with 'x1' miles and 2 days with 'x2'miles in a week.

    weekday_miles = x1 * 5
    weekend_miles = x2 * 2

    total_miles = weekday_miles + weekend_miles

    return total_miles