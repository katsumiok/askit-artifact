# Recompilation count: 0
def a_phone_tree_is_used_e11b29(x1, x2) -> int:
    # Given that each family calls 'x2' other families, the total number of families
    # called in the nth round would be (x2^n). Therefore, in the fourth round the 
    # total number of families contacted would be x1 * (x2^3).

    return x1 * (x2 ** 3)