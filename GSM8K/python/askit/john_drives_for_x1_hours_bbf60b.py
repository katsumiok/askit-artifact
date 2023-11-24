# Recompilation count: 1
def john_drives_for_x1_hours_bbf60b(x1, x2, x3, x4, x5, x6, x7) -> int:
    # John drives for 'x1'hours at a speed of'x2'mph
    distance_travelled = x1 * x2

    # turns around because he realizes he forgot something very important at home.  
    # He tries to get home in 'x3'hours but spends the first 'x4'hours in standstill traffic.  
    remaining_time = x3 - x4

    # He spends the next half-hour driving at a speed of 30mph,
    if remaining_time >= 0.5:
        distance_travelled -= 0.5 * 30
        remaining_time -= 0.5
    else:
        # If he doesn't have a half hour left, he won't be able to drive at once
        return distance_travelled

    # being able to drive the remaining time of the 'x5'hours going at 'x6'mph.  
    if remaining_time >= x5:
        distance_travelled -= x6 * x5
        remaining_time -= x5
    else:
        # If he doesn't have 'x5' hours left, he drives as long as he can
        distance_travelled -= x6 * remaining_time
        return distance_travelled

    # How far is he from home at the end of those 'x7'hours?
    distance_travelled_at_x7_hours = x2 * (x7 - x1)
    if distance_travelled_at_x7_hours > distance_travelled:
        return 0
    else:
        return distance_travelled - distance_travelled_at_x7_hours