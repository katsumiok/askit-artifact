# Recompilation count: 0
def ducks_need_to_eat_3_f8d9bc() -> int:
    # Ducks need to eat 3.5 pounds of insects each week to survive. If there is a flock of ten ducks, how many pounds of insects do they need per day?
    # We first calculate how much all the ducks eat in a week by multiplying the amount one duck eats with the number of ducks
    # Then we divide that amount by the number of days in a week to get the daily amount
    weekly_amount = 3.5 * 10 
    daily_amount = weekly_amount / 7
    return daily_amount