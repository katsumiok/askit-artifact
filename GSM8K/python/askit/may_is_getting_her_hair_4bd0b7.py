# Recompilation count: 0
def may_is_getting_her_hair_4bd0b7(x1) -> int:
    # May is getting her hair cut and colored. It costs $40 for the color and $30 per inch of haircut. If her hair started at'x1'inches and ended at 8, how much did her cut and color cost?
    inches_cut = x1 - 8
    cost = 40 + (inches_cut * 30)
    return cost