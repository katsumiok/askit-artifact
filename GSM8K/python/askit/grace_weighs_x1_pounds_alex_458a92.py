# Recompilation count: 0
def grace_weighs_x1_pounds_alex_458a92(x1, x2, x3) -> int:
    # Grace weighs'x1'pounds. Alex weighs'x2'pounds less than'x3'times what Grace weighs. What are their combined weights in pounds?
    alex_weight = (x3 * x1) - x2
    combined_weight = x1 + alex_weight
    return combined_weight