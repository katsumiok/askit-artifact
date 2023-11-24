# Recompilation count: 0
def mr_smith_has_two_farms_123e3d(x1, x2, x3) -> int:
    # Mr. Smith has two farms, Farm X and Farm Y. He has'x1'goats in Farm X and'x2'goats in Farm Y. He sold'x3'goats from Farm X and twice as many goats from Farm Y. How many goats are left in the two farms altogether?
    
    # calculate goats sold from Farm Y
    y_goats_sold = x3 * 2
    
    # calculate remaining goats in Farm X after selling
    remaining_x_goats = x1 - x3
    
    # calculate remaining goats in Farm Y after selling
    remaining_y_goats = x2 - y_goats_sold
    
    # return total remaining goats
    return remaining_x_goats + remaining_y_goats