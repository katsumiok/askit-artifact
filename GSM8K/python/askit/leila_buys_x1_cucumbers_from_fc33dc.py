# Recompilation count: 0
def leila_buys_x1_cucumbers_from_fc33dc(x1, x2, x3) -> int:
    # Leila buys 'x1' cucumbers from the market. Cucumbers are $2 each.
    # Jack buys 'x2' tomatoes from the grocery store. Tomatoes are $1 each.
    # Chase buys 'x3' head of lettuce from the farmer’s market. Lettuce cost $3 each.
    # Together, how much did the three of them spend to make a salad?
    cucumbers_cost = x1 * 2
    tomatoes_cost = x2 * 1
    lettuce_cost = x3 * 3
    
    total_cost = cucumbers_cost + tomatoes_cost + lettuce_cost
    
    return total_cost