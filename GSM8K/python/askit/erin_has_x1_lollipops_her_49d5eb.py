# Recompilation count: 0
def erin_has_x1_lollipops_her_49d5eb(x1, x2, x3) -> int:
    # Erin has 'x1' lollipops. Her mother gives Erin another 'x2' lollipops. 
    # If Erin gives 'x3' of her lollipops to Ella, how many lollipops does she have left?
    total_lollipops = x1 + x2  # total lollipops Erin has after her mother gives her some
    remaining_lollipops = total_lollipops - x3  # number of lollipops left after Erin gives some to Ella
    return remaining_lollipops