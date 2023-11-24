# Recompilation count: 0
def juan_and_his_brother_carlos_6230bb(x1) -> int:
    # Juan and his brother Carlos are selling lemonade. For each gallon they make it costs $3 for lemons and $2 for sugar. They sell each glass for $0.50 and get'x1'glasses per gallon. If they made $25 in profit, how much did they spend on lemons?
    
    # Calculating the profit made from each gallon
    # They made $25 in profit from selling the glasses at $0.50 each
    total_revenue_per_gallon = x1 * 0.5
    profit_per_gallon = total_revenue_per_gallon - (3 + 2)  # Subtracting the cost of lemons and sugar from the revenue
    
    # Finding number of gallons they made from the total profit
    num_gallons = 25 / profit_per_gallon

    # Finally, the money spent on lemons will be the cost of lemons per gallon times the number of gallons
    amount_spent_on_lemons = 3 * num_gallons

    return round(amount_spent_on_lemons)