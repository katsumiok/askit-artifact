# Recompilation count: 0
def a_plane_travels_x1_miles_7205a0(x1, x2, x3) -> int:
    # A plane travels'x1'miles in'x2'hours. At the same rate, how many additional hours would it take to travel an additional'x3'miles?
    speed = x1 / x2 # miles per hour
    additional_time = x3 / speed # hours
    return additional_time