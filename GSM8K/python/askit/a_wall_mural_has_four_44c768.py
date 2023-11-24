# Recompilation count: 0
def a_wall_mural_has_four_44c768(x1) -> int:
    # A wall mural has four different colors of paint in it: red, white, purple, and yellow.  
    # There are equal amounts of red, white, and purple paint in the mural. 
    # Half the mural is yellow. If the mural used'x1'pints of paint in all, how many pints of red paint was used?

    # Half of the mural is yellow, which means the other half is equally divided between red, white, and purple
    other_half = x1 / 2
    
    # Since red, white, and purple are equally distributed in the other half, we'll divide it by 3 to get the amount of red paint.
    red_paint = other_half / 3

    return int(red_paint)