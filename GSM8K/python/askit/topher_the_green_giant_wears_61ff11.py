# Recompilation count: 0
def topher_the_green_giant_wears_61ff11(x1, x2) -> int:
    # Topher, the green giant, wears enormous shoes. The length of one of his shoes
    # is'x1'inches longer than'x2'times the length of one of Bobby’s shoes.
    # If the length of one of Topher’s shoes is 8-feet and 4-inches, how long, in inches, is one of Bobby’s shoes?
    
    # Convert 8-feet and 4-inches to inches, 8 feet is 96 inches plus 4 inches is total 100 inches
    length_of_Topher_shoe = 100  
    
    # Let's denote the length of one of Bobby's shoes as B.
    # Then, the length of one of Topher’s shoes is 'B*x2 + x1'.
    # So, we can set up the following equation: 
    # B(x2) + x1 = 100
    # By rearranging, we get B = (100 - x1) / x2

    length_of_Bobby_shoe = (length_of_Topher_shoe - x1) / x2
    
    return length_of_Bobby_shoe