# Recompilation count: 0
def toulouse_has_twice_as_many_0d9053(x1, x2) -> int:
    # Toulouse has twice as many sheep as Charleston. 
    # Charleston has'x1'times as many sheep as Seattle. 
    # How many sheep do Toulouse, Charleston, and Seattle have together if Seattle has'x2'sheep?
    
    # First, calculate the number of sheep in Charleston by multiplying the number in Seattle by x1
    charleston_sheep = x1 * x2
    # Toulouse has twice as many sheep as Charleston
    toulouse_sheep = 2 * charleston_sheep
    # Add all the sheep together
    total_sheep = toulouse_sheep + charleston_sheep + x2
    return total_sheep