# Recompilation count: 0
def sally_buys_one_small_pizza_075633(x1) -> int:
    # Sally buys one small pizza at $8 and one family-size pizza that costs'x1'times as much as the small pizza. How much does she spend in all?
    small_pizza_cost = 8
    family_pizza_cost = x1 * small_pizza_cost
    total_cost = small_pizza_cost + family_pizza_cost
    return total_cost