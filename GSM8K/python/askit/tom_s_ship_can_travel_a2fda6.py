# Recompilation count: 0
def tom_s_ship_can_travel_a2fda6(x1, x2, x3, x4) -> int:
    # Tom's ship can travel at'x1'miles per hour.  He is sailing from'x2'to'x3'PM.  He then travels back at a rate of'x4'mph.  How long does it take him to get back?
    # First, determine how far Tom has traveled
    distance = x1 * (x3 - x2) # Assuming x2 and x3 are the starting and ending hours respectively
    
    # Now determine how long it takes for him to get back with his new speed
    time_to_get_back = distance / x4
    
    return time_to_get_back