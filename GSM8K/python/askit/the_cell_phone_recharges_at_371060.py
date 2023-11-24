# Recompilation count: 0
def the_cell_phone_recharges_at_371060(x1, x2) -> int:
    # The cell-phone recharges at the rate of'x1'percentage-point of charge per'x2'minutes. Now, the phone is at 60% charged. How long will it take to fully charge, in hours?

    # Amount of charge needed to reach 100%
    charge_needed = 100 - 60  # 40%

    # Time required to gain 1% of charge
    time_for_one_percent = x2 / x1

    # Total time required to gain necessary charge
    total_time_in_minutes = charge_needed * time_for_one_percent

    # Convert total time from minutes to hours
    total_time_in_hours = total_time_in_minutes / 60

    return total_time_in_hours