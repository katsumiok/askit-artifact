# Recompilation count: 0
def rose_bought_five_dozens_of_78cd86(x1) -> int:
    # Cost per egg
    cost_per_egg = (5*2.40)/60
    # Selling price per egg
    selling_price_per_egg = 1/x1
    # Profit per egg
    profit_per_egg = selling_price_per_egg - cost_per_egg
    # Total profit
    total_profit = profit_per_egg * 60
    # return total profit rounded to 2 decimal places
    return round(total_profit, 2)