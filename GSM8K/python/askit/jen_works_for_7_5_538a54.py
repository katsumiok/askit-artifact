# Recompilation count: 1
def jen_works_for_7_5_538a54(x1, x2) -> int:
    """
    The function calculates the earnings of Jen for April.
    x1: days a week Jen works
    x2: weeks in April
    return: The total amount Jen will receive.
    """
    hours_in_day = 7.5
    hourly_rate = 1.5
    attendance_bonus = 10
    
    # Calculate her daily earnings
    daily_earnings = hours_in_day * hourly_rate

    # Calculate her weekly earnings
    weekly_earnings = daily_earnings * x1 

    # Calculate her monthly earnings, including the attendance bonus
    monthly_earnings = (weekly_earnings * x2) + attendance_bonus

    return monthly_earnings