# Recompilation count: 0
def some_people_got_on_a_333c58(x1, x2, x3, x4) -> int:
    # Some people got on a bus at the terminal. At the first bus stop,'x1'more people got in. 
    # Then at the second bus stop,'x2'people got down and'x3'more got in. 
    # If there were a total of'x4'people heading to the third stop, 
    # how many people got on the bus at the terminal?
    
    # Calculate the initial number of people on the bus.
    # x4 (total people going to third stop) = initial people + x1 (people who got in at 1st stop) - x2 (people who got down 2nd stop) + x3 (people got in at 2nd stop)
    # From this, we can write equation, initial people = x4 - x1 + x2 - x3
    
    initial_people_on_bus = x4 - x1 + x2 - x3
    return initial_people_on_bus