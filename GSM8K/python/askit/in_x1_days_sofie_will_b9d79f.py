# Recompilation count: 0
def in_x1_days_sofie_will_b9d79f(x1, x2) -> int:
    # In 'x1' days, Sofie will walk twice as far as Brian. 
    # If Sofie plans to walk 'x2' miles every day,
    # how many miles will Brian walk in seven days?

    sofie_total_miles = x1 * x2  # Total miles Sofie will walk
    brian_total_miles = sofie_total_miles / 2  # Brian walks half the distance of Sofie

    # Find out how many miles Brian walks daily
    brian_daily_miles = brian_total_miles / x1

    # Calculate how many miles Brian will walk in seven days
    miles_brian_will_walk_in_seven_days = brian_daily_miles * 7

    return miles_brian_will_walk_in_seven_days