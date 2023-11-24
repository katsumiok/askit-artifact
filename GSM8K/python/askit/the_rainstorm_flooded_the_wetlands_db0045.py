# Recompilation count: 0
def the_rainstorm_flooded_the_wetlands_db0045(x1, x2, x3) -> int:
    # The rainstorm flooded the wetlands and washed Phineas Frog'x1'yards away from his home in the swamp.  To return home, he will need to hop and swim his way back.  If he hops on land at a speed of'x2'yards per minute, and swims through water at a speed of'x3'yards per minute, how long will it take Phineas, in minutes, to return home if half of the distance is on land and the other half is in water?
    land_distance = x1 / 2  # Half of the distance is on land.
    water_distance = x1 / 2  # Half of the distance is in water.
    
    land_time = land_distance / x2  # Time to travel on land.
    water_time = water_distance / x3  # Time to travel in water.

    return round(land_time + water_time)  # Sum of both times.