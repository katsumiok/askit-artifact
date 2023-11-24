# Recompilation count: 0
def martha_is_knitting_winter_wear_55be88(x1, x2, x3, x4, x5, x6) -> int:
    
    # Calculation of total skeins for knitting a set of winter wear (hat, scarf, sweater, mittens, socks)
    total_skeins_for_one_child = x2 + x3 + x4 + x5 + x6
    
    # As she is knitting for 'x1' grandchildren, multiply 'x1' with total_skeins_for_one_child
    total_skeins_needed = x1 * total_skeins_for_one_child
    
    # return the total skeins needed
    return total_skeins_needed