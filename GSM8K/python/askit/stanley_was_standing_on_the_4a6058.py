# Recompilation count: 0
def stanley_was_standing_on_the_4a6058() -> int:
    # Stanley was standing on the side of the mountain, at an elevation of 10,000 feet, when a gust air blew the comb out of his pocket, causing the comb to fall 4,000 feet to a ledge below.  Stanley's brother, Oliver, was also on the mountain, but he was at an elevation of 3,000 feet.  Stanley called Oliver on his cellphone and asked Oliver to find Stanley's comb.  How many feet must Oliver climb to reach the elevation of Stanley's comb?
    
    # Stanley's elevation
    stanley_elevation = 10000 
    # Comb fall
    comb_fall = 4000
    # Oliver's elevation
    oliver_elevation = 3000

    # Final elevation of the comb
    comb_elevation = stanley_elevation - comb_fall
    # The distance Oliver must climb 
    distance_oliver_must_climb = comb_elevation - oliver_elevation

    return distance_oliver_must_climb