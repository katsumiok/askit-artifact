# Recompilation count: 0
def john_invited_x1_people_to_165e11(x1, x2, x3, x4) -> int:
    total_hot_dogs_needed = x1 * x2
    if total_hot_dogs_needed <= x3:
        return 0
    else:
        packs_needed = (total_hot_dogs_needed - x3 + x4 - 1) // x4  # ceiling division
        return packs_needed * 2