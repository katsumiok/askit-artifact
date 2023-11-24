# Recompilation count: 0
def billy_is_volunteeri_his_time_aede7e(x1, x2, x3) -> int:
    # Billy is volunteering his time to help people do their taxes. He can help'x1'people per hour for'x2'hours a day. If he takes 20% of the days between March 1st and April 19th off, and helps people on all the other days. How many people does he help? (Remember there are'x3'days in March.)

    days_in_april = 19
    total_days = x3 + days_in_april # total days in Mar and Apr
    work_days = total_days * 0.8 # 20% days off

    return x1 * x2 * work_days