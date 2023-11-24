# Recompilation count: 0
def vincent_can_buy_flowers_in_e0e31e(x1, x2, x3) -> int:
    # Vincent can buy flowers in packages of'x1'for $2.50 or in packages of'x2'for $1. How much money does he save by buying'x3'flowers at the better price?
    
    # Calculating the cost for both ways
    cost_x1 = (x3 / x1) * 2.5 
    cost_x2 = (x3 / x2) * 1
    
    # Comparing and returning the savings
    if cost_x1 < cost_x2:
        return cost_x2 - cost_x1
    else:
        return cost_x1 - cost_x2