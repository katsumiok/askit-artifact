# Recompilation count: 0
def jon_s_car_needs_a_983bc4(x1, x2, x3) -> int:
    # Jon's car needs a tune-up every'x1'miles.  He drives'x2'miles a day for a'x3'day month.  How many tune-ups does he need in that time?
    total_miles = x2 * x3
    tune_ups = total_miles // x1

    return tune_ups