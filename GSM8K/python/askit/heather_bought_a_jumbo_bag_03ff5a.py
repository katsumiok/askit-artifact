# Recompilation count: 0
def heather_bought_a_jumbo_bag_03ff5a(x1) -> int:
    
    # Each use will take a third of the raisins
    # Conversion note: 1 cup = 16 tablespoons. 3/4 cup = 12 tablespoons
    raisins_per_use = x1 / 3
    
    # One batch of oatmeal cookies takes 3/4 (0.75) cup of raisins
    batches_of_cookies = raisins_per_use / 0.75
    
    # As batches can't be fractional, the function returns an integer
    return int(batches_of_cookies)