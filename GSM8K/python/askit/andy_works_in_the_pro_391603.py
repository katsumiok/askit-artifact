# Recompilation count: 0
def andy_works_in_the_pro_391603(x1, x2, x3, x4, x5, x6, x7) -> int:
    # Andy works in the pro shop of a tennis resort. He has 'x1' racquets that need restringing. 'x2' of them are to be strung with synthetic gut, 'x3' of them will be strung with polyester string, and 'x4' of them will be strung with a hybrid set (half synthetic gut, half polyester string).
    # How long will it take Andy to string all of those racquets if it takes him an average of 'x5' minutes for him to string with synthetic gut, 'x6' minutes to string with polyester string, and 'x7' minutes for hybrid sets?
    
    total_time = (x2 * x5) + (x3 * x6) + (x4 * x7)
    
    return total_time