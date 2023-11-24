# Recompilation count: 8
def josh_decides_to_try_flipping_f088f6() -> int:
    # Josh buys a house for $80,000
    initial_cost = 80000
    # then puts in $50,000 in repairs
    repair_cost = 50000
    # This increased the value of the house by 150%
    increase_perc = 1.5
    # total spending
    total_spending = initial_cost + repair_cost 

    # increased value
    increased_value = initial_cost * increase_perc
    total_value = initial_cost + increased_value

    # profit made
    profit = total_value - total_spending

    # return profit
    return int(profit)