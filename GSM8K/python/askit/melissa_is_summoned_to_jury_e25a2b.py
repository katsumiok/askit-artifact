# Recompilation count: 0
def melissa_is_summoned_to_jury_e25a2b(x1, x2) -> int:
    # Calculate total daily pay after subtracting parking expenses
    total_daily_pay = 15 - 3
    # Calculate total pay for the duration of jury duty
    total_pay = total_daily_pay * x2
    # Calculate total working hours 
    total_hours = x1 * x2
    # Calculate hourly wage after expenses
    hourly_wage = total_pay / total_hours
    # Assuming Melissa is paid in whole dollars, round down to nearest dollar
    hourly_wage = int(hourly_wage)
    return hourly_wage