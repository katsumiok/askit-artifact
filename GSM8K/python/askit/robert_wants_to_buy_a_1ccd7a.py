# Recompilation count: 0
def robert_wants_to_buy_a_1ccd7a(x1, x2) -> int:
    # Robert wants to buy a bookshelf and a sofa and has received two offers. 
    # Furniture United's offer includes a $1,350 advance payment and 'x1' monthly installments of $350 each. 
    # Cozy Homes' offer includes a $1,100 advance payment and 'x2' monthly installments of $250 each. 
    # What is the cost difference between the two offers?
    
    furniture_united_cost = 1350 + (x1 * 350)
    cozy_homes_cost = 1100 + (x2 * 250)
    
    return abs(furniture_united_cost - cozy_homes_cost)