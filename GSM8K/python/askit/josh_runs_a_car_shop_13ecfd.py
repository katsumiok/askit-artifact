# Recompilation count: 0
def josh_runs_a_car_shop_13ecfd(x1, x2) -> int:
    # Josh services x1 cars a day for 5 days a week 
    # (as he is closed on Sunday and Wednesday). 
    # He makes $4 for each car, and we need to calculate how much he makes in x2 weeks
    days_per_week = 5
    pay_per_car = 4
    total_earning = x1 * x2 * days_per_week * pay_per_car
    return total_earning