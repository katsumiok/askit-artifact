# Recompilation count: 0
def john_runs_x1_miles_a_c6fc5d(x1, x2, x3) -> float:
    # John runs'x1'miles a week. He runs'x2'days a week.  He runs'x3'hours the first day and half as much the other two days he runs.  How fast does he run?
    # total time John runs in a week
    total_time = x3 + (x2 - 1) * (x3 / 2)
    # speed = distance / time
    speed = x1 / total_time
    return speed