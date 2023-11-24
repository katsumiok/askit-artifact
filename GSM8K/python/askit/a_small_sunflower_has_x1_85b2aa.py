# Recompilation count: 0
def a_small_sunflower_has_x1_85b2aa(x1) -> int:
    # A small sunflower has'x1'dozen seeds and a large sunflower has 50% more seeds than a small sunflower.  How many sunflower seeds are there altogether?
    small_sunflower_seeds = x1 * 12  # As x1 is in dozen, converting it to number of seeds
    large_sunflower_seeds = small_sunflower_seeds * 1.5  # Large sunflower has 50% more seeds
    return int(small_sunflower_seeds + large_sunflower_seeds)  # Adding both types of seeds