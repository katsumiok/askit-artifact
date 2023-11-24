# Recompilation count: 0
def a_bus_has_a_capacity_b490c5(x1, x2, x3) -> int:
    # A bus has a capacity of 'x1' people. When it departed Chengli city, it had 'x2' people. On the first stop, 'x3' people entered the bus.
    # On the second station, 3/4 of the total number of people who entered the bus at the first station entered the bus. 
    # If the number of passengers on the bus doubled at the third station, calculate the total number of people required to fill the remaining spaces on the bus.
    
    # On the first station
    total_on_bus = x2 + x3
    
    # On the second station
    total_on_bus += 0.75 * x3
    
    # At the third station
    total_on_bus *= 2
    
    # Number of people required to fill the remaining spaces on the bus
    required_people = x1 - total_on_bus
    
    return int(required_people)