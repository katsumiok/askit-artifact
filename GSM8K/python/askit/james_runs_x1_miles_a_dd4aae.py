# Recompilation count: 0
def james_runs_x1_miles_a_dd4aae(x1, x2, x3) -> int:
    # James runs 'x1' miles a day for 'x2' days a week. If he runs 'x3' miles an hour how many hours does he run a week?
    miles_per_week = x1 * x2
    hours_per_week = miles_per_week / x3
    return hours_per_week