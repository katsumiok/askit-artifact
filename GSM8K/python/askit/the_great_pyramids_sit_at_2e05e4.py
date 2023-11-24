# Recompilation count: 0
def the_great_pyramids_sit_at_2e05e4(x1, x2, x3) -> int:
    # The great pyramids sit at an angle of'x1'degrees from the ground when you stand at the entrance of Sahir's house. 
    # The sun is moving at'x2'degrees an hour straight upward from the pyramid relative to Sahir's house. 
    # If the sun starts at the tip of the pyramid and moves for'x3'hours, how many degrees will there be from the ground to the sun?

    # Calculation
    total_degrees = x1 + x2 * x3
    return total_degrees