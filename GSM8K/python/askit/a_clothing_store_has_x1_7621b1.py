# Recompilation count: 0
def a_clothing_store_has_x1_7621b1(x1, x2, x3) -> int:
    # A clothing store has'x1'white shirts and'x2'floral shirts. Half of the white shirts have collars, and'x3'of the floral shirts have buttons. How many more floral shirts with no buttons are there than white shirts with no collars?

    white_shirts_with_no_collars = x1 / 2
    floral_shirts_with_no_buttons = x2 - x3
    
    return floral_shirts_with_no_buttons - white_shirts_with_no_collars