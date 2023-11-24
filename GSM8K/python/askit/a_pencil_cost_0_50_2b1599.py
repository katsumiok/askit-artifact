# Recompilation count: 0
def a_pencil_cost_0_50_2b1599(x1, x2) -> float:
    # A pencil cost $0.50, and an eraser cost $0.25. 
    # If you bought 'x1' pencils and 'x2' erasers and paid $10, how much change would you get?
    
    total_cost = x1 * 0.50 + x2 * 0.25
    change = 10 - total_cost
    
    return change