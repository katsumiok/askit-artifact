# Recompilation count: 0
def patrick_has_three_glue_sticks_b9a50b(x1) -> int:
    # Patrick has three glue sticks that are partially used. 
    # One has 1/6 left, the second has 2/3 left and the third one has 1/2 left. 
    # If a glue stick is 'x1' millimeters long originally, 
    # what is the total length of the glue sticks that are not used?
    
    total_length = (1/6 + 2/3 + 1/2) * x1
    return int(total_length)