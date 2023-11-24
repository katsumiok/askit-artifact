# Recompilation count: 0
def mason_needs_x1_ounces_of_9357ea(x1, x2, x3, x4) -> int:
    # Mason needs'x1'ounces of sugar to make a batch of suckers and'x2'ounces of sugar to make a batch of fudge. How much sugar does he need to make'x3'batches of suckers and'x4'batch of fudge?
    total_sugar_for_suckers = x1 * x3
    total_sugar_for_fudge = x2 * x4
    total_sugar_needed = total_sugar_for_suckers + total_sugar_for_fudge
    return total_sugar_needed