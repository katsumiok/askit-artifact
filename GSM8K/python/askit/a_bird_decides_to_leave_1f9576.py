# Recompilation count: 0
def a_bird_decides_to_leave_1f9576(x1: int, x2: int, x3: int, x4: int, x5: int, x6: int) -> int:
    distance_south = x1 * x2
    distance_north = x3 * x4
    distance_south_again = x5 * x6

    # The total distance will be first flight to the south plus the distance 
    # covered back to the north and then moving south again
    total_distance = distance_south + distance_south_again - distance_north
    
    return total_distance