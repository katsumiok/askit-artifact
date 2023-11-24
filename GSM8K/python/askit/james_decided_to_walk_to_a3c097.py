# Recompilation count: 1
def james_decided_to_walk_to_a3c097(x1, x2) -> int:
    # The distance James has to walk is twice the distance from his home to the store (round trip)
    total_distance = 2 * x1
    
    # The time it takes for James to reach the store is the total distance divided by his speed
    time = total_distance / x2
    
    return time