# Recompilation count: 0
def jennifer_bought_x1_oranges_from_c07d92(x1, x2, x3) -> int:
    # Jennifer bought 'x1' oranges from the market, she gave her three daughters 'x2' oranges each, and her only boy got 'x3' oranges. How many oranges did she remain with?
    
    remaining_oranges = x1 - (3*x2 + x3)
    return remaining_oranges