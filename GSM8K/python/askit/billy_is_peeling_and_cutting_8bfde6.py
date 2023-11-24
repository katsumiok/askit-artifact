# Recompilation count: 2
def billy_is_peeling_and_cutting_8bfde6(x1, x2) -> int:
    # Billy is peeling and cutting potatoes. It takes him 1.5 minutes per potato and 'x2' seconds. 
    # Thus, he spends 1.5*60 + 'x2' seconds on each potato.
    # So, for 'x1' potatoes it will take 'x1'*(1.5*60 + 'x2') seconds
    # We return this value divided by 60 to convert seconds to minutes.
    return x1 * (1.5 * 60 + x2) / 60