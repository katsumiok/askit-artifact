# Recompilation count: 0
def tim_spends_x1_hours_each_174b36(x1, x2, x3) -> int:
    # Tim spends'x1'hours each day at work answering phones.  It takes him'x2'minutes to deal with a call.  How many calls does he deal with during his'x3'day work week?
    
    # Convert hours into minutes
    total_minutes_per_day = x1 * 60

    # Calculate how many calls Tim can deal in a day
    calls_per_day = total_minutes_per_day//x2

    # Total calls during his x3 day work week
    total_calls = calls_per_day*x3

    return total_calls