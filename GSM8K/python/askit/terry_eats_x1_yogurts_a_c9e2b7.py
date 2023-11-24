# Recompilation count: 0
def terry_eats_x1_yogurts_a_c9e2b7(x1, x2, x3) -> int:
    # Terry eats'x1'yogurts a day.  They are currently on sale at'x2'yogurts for $5.00.  How much does he spend on yogurt over'x3'days?
    total_yogurts = x1 * x3
    price_per_yogurt = 5 / x2
    total_spent = total_yogurts * price_per_yogurt
    return total_spent