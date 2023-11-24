# Recompilation count: 0
def jerry_counts_six_birds_nesting_977418(x1) -> int:
    # Jerry counts six birds nesting in the bushes, 2/3rd of that number of birds flying overhead, and'x1'groups of eight birds each feeding. How many birds does he count in total?
    nesting = 6
    flying = int(2/3 * nesting)
    feeding = x1 * 8
    total_birds = nesting + flying + feeding
    return total_birds