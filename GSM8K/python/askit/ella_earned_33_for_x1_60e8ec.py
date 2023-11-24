# Recompilation count: 0
def ella_earned_33_for_x1_60e8ec(x1, x2) -> int:
    # Ella earned $33 for 'x1' hours of dog walking. 
    # If she continues to walk dogs at the same rate, how much would she earn after 'x2' hours?

    # Calculate the rate per hour
    rate_per_hour = 33 / x1

    # Calculate the earning for 'x2' hours
    earning_for_x2_hours = rate_per_hour * x2

    return int(earning_for_x2_hours)