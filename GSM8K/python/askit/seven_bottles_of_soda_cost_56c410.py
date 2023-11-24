# Recompilation count: 0
def seven_bottles_of_soda_cost_56c410(x1, x2, x3) -> int:
    # Seven bottles of soda cost $21.00 while'x1'bottles of water cost $8. If David wants to buy'x2'bottles of soda and'x3'bottles of water, how much will that cost?
    soda_price_per_bottle = 21.00 / 7
    water_price_per_bottle = 8.00 / x1

    total_cost_of_soda = soda_price_per_bottle * x2
    total_cost_of_water = water_price_per_bottle * x3

    return total_cost_of_soda + total_cost_of_water