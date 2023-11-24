# Recompilation count: 0
def alain_s_mom_bought_x1_19ad92(x1, x2) -> int:
    # Alain's mom bought 'x1' packs of red pens and also bought twice the amount of black pens than the red. 
    # If each pack has 'x2' pens, how many pens does Alain have?
    red_pens = x1 * x2
    black_pens = 2 * x1 * x2
    total_pens = red_pens + black_pens
    return total_pens