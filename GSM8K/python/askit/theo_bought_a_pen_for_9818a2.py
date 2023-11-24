# Recompilation count: 0
def theo_bought_a_pen_for_9818a2() -> int:
    # Theo bought a pen for $2 and a piece of paper that cost $1 less than three times the price of the pen. She gave the cashier $10. What is the amount of change Theo received?
    
    # Cost of the pen
    pen_price = 2
    
    # Cost of the piece of paper
    paper_price = 3 * pen_price - 1
    
    # total cost of the pen and the paper
    total_cost = pen_price + paper_price 
    
    # The amount Theo gave to the cashier
    amount_given = 10
    
    # The change Theo received
    change = amount_given - total_cost
    
    # returning the change
    return change