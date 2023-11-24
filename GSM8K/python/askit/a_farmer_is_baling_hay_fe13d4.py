# Recompilation count: 0
def a_farmer_is_baling_hay_fe13d4(x1, x2, x3) -> int:
    # A farmer is baling hay in their field. Each hour the farmer makes'x1'bales. At the same time, a truck is picking the hay bales up. Each hour the truck picks up'x2'bales of hay. If the farmer and the truck driver put in a'x3'hour day, how many bales of hay are left in the field?
    
    # Calculate total bales produced by farmer in 'x3' hours
    total_bales_produced = x1 * x3
    
    # Calculate total bales picked up by the truck in 'x3' hours
    total_bales_picked = x2 * x3
    
    # Subtract total bales picked from total bales produced to find the bales left in the field
    bales_left_in_field = total_bales_produced - total_bales_picked
    
    return bales_left_in_field