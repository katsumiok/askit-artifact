# Recompilation count: 0
def a_basic_manicure_starts_at_361f28() -> int:
    # A basic manicure starts at $35 
    manicure = 35
    # a pedicure starts at $40.
    pedicure = 40  
    # A certain salon offers 20% off if you get both. 
    total = (manicure + pedicure) * 0.8  
    # Suppose Karen chooses to do both and would also like to add nail art on each of her fingers, which costs $3 per nail. 
    # Assuming Karen has 10 fingers
    nail_art = 3 * 10  
    # How much would she pay in all?
    total += nail_art
    return int(total)