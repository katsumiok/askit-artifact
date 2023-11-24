# Recompilation count: 0
def april_is_donating_plant_pots_1c4f13(x1, x2) -> int:
    # April is donating plant pots to a local school for their new garden. They ask for'x1'plant pots for the daisies, and twice as many for the roses. April had already bought'x2'plant pots from the garden center before she knew how many she needed. How many plant pots does April have left over?
    total_needed = x1 + 2*x1 # Pots needed for daisies and twice as many for roses
    return x2 - total_needed # How many does she have left