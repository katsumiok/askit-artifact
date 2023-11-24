# Recompilation count: 0
def a_76_star_flag_has_b5e130(x1, x2, x3) -> int:
    # calculate remaining stars after deducing x1 and x2 star rows
    remaining_stars = 76 - ((3 * x1) + (2 * x2))
    
    # calculate and return rows of x3 stars
    return remaining_stars // x3