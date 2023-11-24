# Recompilation count: 0
def tyler_wants_to_buy_a_c70bf8() -> int:
    # Total cost of books
    total_cost = 18 + 13 + 8 
    # Money Tyler has saved
    saved_money = 14
    # Money need to earn
    money_to_earn = total_cost - saved_money
    # If Tyler earns $5 per hour, we divide the total money he needs to earn by his hourly wage to get the hours he needs to work
    hours_to_work = money_to_earn / 5
    # Rounding up since he can't work partial hours
    return round(hours_to_work) 