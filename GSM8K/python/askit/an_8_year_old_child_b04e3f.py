# Recompilation count: 0
def an_8_year_old_child_b04e3f() -> int:
    # An 8-year old child wants to buy a toy car which costs $12. He already has $4 savings. How many days will it take him to save the remaining amount of money if he promises to save $2 daily from his allowance?
    
    cost_of_toy_car = 12
    savings = 4
    daily_savings = 2

    remaining_amount = cost_of_toy_car - savings

    days_needed = remaining_amount / daily_savings

    return int(days_needed) # we return "int" because days can't be a fraction