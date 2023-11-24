# Recompilation count: 0
def to_raise_money_for_their_975bb5(x1, x2) -> int:
    # To raise money for their class fund, each of the'x1'students from one class sold lollipops that cost $0.8 per lollypop. 
    # On average, each student sold'x2'lollipops. 
    # If they bought the lollipops for $0.5 each, 
    # how much money was the class able to raise from the profit of selling lollipops?
    
    # calculate the total sale amount
    total_sale_amount = x1 * x2 * 0.8
    
    # calculate the total cost of lollipops
    total_cost = x1 * x2 * 0.5
    
    # calculate the profit
    profit = total_sale_amount - total_cost
    
    return profit