# Recompilation count: 0
def tom_decides_to_give_his_a8ec5e(x1) -> int:
    
    # Plane ticket cost for 2
    plane_tickets = 5000 * 2
    
    # Normal cost of hotel per day
    normal_hotel_cost_per_day = 1500
    
    # Increased cost of hotel per day  
    increased_hotel_cost_per_day = normal_hotel_cost_per_day * 1.2
    
    # Total hotel cost for 'x1' days
    hotel_cost = increased_hotel_cost_per_day * x1
    
    # Total trip cost
    total_cost = plane_tickets + hotel_cost
    
    return total_cost