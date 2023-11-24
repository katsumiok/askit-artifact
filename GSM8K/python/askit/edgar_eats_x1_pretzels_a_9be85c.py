# Recompilation count: 0
def edgar_eats_x1_pretzels_a_9be85c(x1) -> int:
    # Edgar eats'x1'pretzels a day. If his brother eats 1/2 as many, how many does his brother eat in a week?
    brother_pretzels_day = x1/2
    brother_pretzels_week = brother_pretzels_day * 7
    return int(brother_pretzels_week)