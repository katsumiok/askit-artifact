# Recompilation count: 0
def bill_is_signing_up_for_5e665f(x1, x2, x3) -> int:
    # Determine the cost of each period
    cost_introductory = x1 * 8
    cost_normal_rate = x2 * 12
    cost_increased_rate = (12 * x3 - (x1 + x2)) * 14
    # Calculate the total cost
    total_cost = cost_introductory + cost_normal_rate + cost_increased_rate
    
    return total_cost