# Recompilation count: 0
def a_cobra_which_has_x1_1640d7(x1, x2, x3) -> int:
    # A cobra, which has'x1'spots, has twice as many spots as a mamba. 
    # If there are'x2'cobras and'x3'mambas in a snake park, what is half the number of spots they all have combined?
    
    cobra_spots = x1 * x2 # total number of spots on all the cobras.
    mamba_spots = (x1 // 2) * x3 # total number of spots on all the mambas.
    
    total_spots = cobra_spots + mamba_spots
    
    return total_spots // 2 # return the half of total spots.