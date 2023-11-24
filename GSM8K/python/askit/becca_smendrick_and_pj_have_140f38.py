# Recompilation count: 3
def becca_smendrick_and_pj_have_140f38(x1, x2, x3) -> int:
    # Let's assume that PJ has 'p' cards
    # then, Smendrick has 'x3 * p' cards
    # and, Becca has 'x2 + x3*p' cards.
    
    # So, total cards are 'x1 = p + x3 * p + x2 + x3 * p', or 
    # 'x1 = (2 * x3 + 1) * p + x2'
    
    # Thus, 'p = (x1 - x2) / (2 * x3 + 1)', and
    # number of cards Becca have is 'x2 + x3 * p'
    
    p = (x1 - x2) / (2 * x3 + 1)
    return int(x2 + x3 * p)