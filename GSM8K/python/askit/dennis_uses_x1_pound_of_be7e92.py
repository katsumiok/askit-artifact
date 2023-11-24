# Recompilation count: 2
def dennis_uses_x1_pound_of_be7e92(x1, x2, x3) -> int:
    
    # Total butter required
    total_butter_needed = x1 * x2

    # Calculate the cost for the first pound of butter
    first_pound_cost = 4 * total_butter_needed // 2
   
    # Calculate the cost for the second half price pound of butter
    second_pound_cost = 2 * (total_butter_needed - total_butter_needed // 2)

    # Total cost
    return first_pound_cost + second_pound_cost