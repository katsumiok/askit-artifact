# Recompilation count: 0
def hannah_needs_to_drink_x1_08e950(x1, x2, x3, x4, x5, x6) -> int:
    # Hannah needs to drink'x1'ml of water for every'x2'calories she burns. 
    # She spends'x3'hours doing aerobics, which burns'x4'calories/hour, and'x5'hour running, which burns'x6'calories/hour. 
    # How many ml of water does she need to drink?
    aerobics_calories = x3 * x4
    running_calories = x5 * x6
    total_calories = aerobics_calories + running_calories
    return total_calories//x2 * x1