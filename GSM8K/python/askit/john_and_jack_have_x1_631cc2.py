# Recompilation count: 0
def john_and_jack_have_x1_631cc2(x1, x2, x3) -> int:
    # John and Jack have'x1'minutes to walk to school together. It takes them'x2'minutes to get to the corner where the library is. It takes them another'x3'minutes to get to the fire station. How much longer do they have to get to school without being late?
    remaining_time = x1 - (x2 + x3)
    return remaining_time