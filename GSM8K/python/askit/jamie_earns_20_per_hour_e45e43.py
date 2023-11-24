# Recompilation count: 0
def jamie_earns_20_per_hour_e45e43(x1, x2) -> int:
    # Jamie earns $20 per hour for'x1'hours of work each day. Should she need to work additional hours, she is paid a special hourly rate that is 150% of her regular hourly rate. Last Tuesday, she worked'x2'hours. How much was she paid, in dollars, for her work that day?
    if x2 <= x1:
        # If she worked less than or equal to her regular hours
        return x2 * 20
    else:
        # If she worked more than her regular hours, she gets 150% of her hourly rate
        regular_hours = x1 * 20
        extra_hours = (x2 - x1) * 20 * 1.5
        return int(regular_hours + extra_hours)