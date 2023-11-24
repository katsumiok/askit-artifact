# Recompilation count: 0
def john_visits_his_parents_twice_3f82dc(x1, x2) -> int:
    # John visits his parents twice a month.  It takes him 'x1' hours to drive there at a speed of 'x2' mph.  
    # Considering the round trip, how many miles a month does he drive when visiting his parents?
    # The distance for a one way trip is time multiplied by speed.
    one_way_distance = x1 * x2
    
    # As he makes a round trip (there and back) twice a month, the total distance is 4 times the one way distance.
    total_distance = 4 * one_way_distance
    
    return total_distance