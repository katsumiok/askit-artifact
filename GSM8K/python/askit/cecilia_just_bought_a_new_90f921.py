# Recompilation count: 0
def cecilia_just_bought_a_new_90f921(x1, x2, x3, x4) -> int:
    # feed required in first x2 days
    first_days_feed = x1 * x2 

    # feed required for rest of the year
    rest_of_year_feed = ((365 - x2) * x3) 

    # total feed required
    total_feed = first_days_feed + rest_of_year_feed 

    # calculating total bags of dog food needed, we use ceiling division to get the upper limit in case of division result in decimal
    total_bags = -(-total_feed // x4)

    return total_bags