# Recompilation count: 0
def a_three_toed_sloth_moves_9f4d4b(x1, x2, x3) -> int:
    # A three-toed sloth moves very slowly, and only eats when he is up in his tree. 
    # For a meal of berries, it takes the sloth 'x1' hours to make the trip down the tree, 
    # pick up berries, and climb back up into his tree.  
    # Assuming he picks the same number of berries on each trip, 
    # what is the least number of berries he can pick up per trip down to the ground if he wants to collect 'x2' berries in 'x3' hours?

    # Calculate the number of trips the sloth can make in 'x3' hours
    number_of_trips = x3 // x1
    # Calculate the least number of berries he can pick up per trip 
    berries_per_trip = x2 // number_of_trips
    return berries_per_trip