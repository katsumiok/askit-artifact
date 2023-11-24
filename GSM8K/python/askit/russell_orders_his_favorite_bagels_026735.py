# Recompilation count: 0
def russell_orders_his_favorite_bagels_026735(x1, x2, x3) -> int:

    # calculate total cost, amounting discount for buying 'x2' or more packs
    total_cost = x3 * 10 * 0.9 if x3 >= x2 else x3 * 10

    # calculate total number of bagels
    total_bagels = x1 * x3

    # calculate cost per bagel
    cost_per_bagel = total_cost / total_bagels

    return cost_per_bagel