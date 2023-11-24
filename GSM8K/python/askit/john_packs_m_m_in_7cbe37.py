# Recompilation count: 0
def john_packs_m_m_in_7cbe37(x1, x2, x3, x4) -> int:
    # John packs M&M in small bags to eat.  He buys'x1'large bags weighing'x2'ounces each.  
    # If an ounce of M&M has'x3' M&M in it how many small bags can he make if he puts'x4' in each small bag?
    
    # total number of M&M he has
    total_m_m = x1 * x2 * x3
    # number of small bags he can create
    number_small_bags = total_m_m // x4
    
    return number_small_bags