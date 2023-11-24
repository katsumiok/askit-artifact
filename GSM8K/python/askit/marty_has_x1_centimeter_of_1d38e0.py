# Recompilation count: 0
def marty_has_x1_centimeter_of_1d38e0(x1, x2, x3) -> int:
    # Marty has'x1'centimeters of ribbon that he must cut into'x2'equal parts. 
    # Each of the cut parts must be divided into'x3'equal parts. 
    # How long will each final cut be?

    # First, we divide the total length by the number of initial cuts
    initial_cut_length = x1 / x2
    
    # Then, we divide the result by the number of secondary cuts
    final_cut_length = initial_cut_length / x3

    return final_cut_length