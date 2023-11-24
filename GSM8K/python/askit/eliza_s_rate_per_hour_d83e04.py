# Recompilation count: 0
def eliza_s_rate_per_hour_d83e04(x1, x2) -> int:
    # Eliza's rate per hour for the first'x1'hours she works each week is $10. She also receives an overtime pay of 1.2 times her regular hourly rate. If Eliza worked for'x2'hours this week, how much are her earnings for this week?
    if x2 <= x1:
        return x2 * 10
    else:
        regular_pay = x1 * 10
        overtime_hours = x2 - x1
        overtime_pay = overtime_hours * (10 * 1.2)
        total_pay = regular_pay + overtime_pay
        return total_pay