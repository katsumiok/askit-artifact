# Recompilation count: 3
def millie_decides_to_open_a_2bd47f(x1, x2, x3) -> int:
    # Millie decides to open a lemonade stand. She spends $18 to buy enough supplies to make'x1'pitchers of lemonade. 
    # Each pitcher holds'x2'cups of lemonade. She sells each cup of lemonade for $1. 
    # She sells an average of'x3'cups per hour that her lemonade stand is open. 
    # If Millie sells all of the lemonade, how much profit will she make per hour that she spends running the lemonade stand?
    
    total_cost = 18 # initial cost
    total_income = x1*x2 # the number of pitchers times the number of cups per pitcher
    hours_to_sell_all = total_income / x3 # total cups divided by cups selling per hour 
    
    profit = total_income - total_cost # calculating profit
    profit_per_hour = profit / hours_to_sell_all # calculating profit per hour
    
    return profit_per_hour