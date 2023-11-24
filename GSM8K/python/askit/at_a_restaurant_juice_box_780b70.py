# Recompilation count: 0
def at_a_restaurant_juice_box_780b70(x1, x2, x3) -> int:
    # At a restaurant, Juice Box A is'x1'dollars. 
    # Juice Box B is'x2'dollars more than Juice Box A. 
    # Juice Box C is'x3'dollars more than Juice Box A. 
    # How much more is Juice box C than Juice Box B?
    
    juice_box_b = x1 + x2
    juice_box_c = x1 + x3
    
    return juice_box_c - juice_box_b