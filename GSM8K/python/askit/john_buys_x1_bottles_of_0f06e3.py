# Recompilation count: 0
def john_buys_x1_bottles_of_0f06e3(x1) -> int:
    # John buys'x1'bottles of scotch for a total cost of $600.  He also buys twice as many bottles of cognac that cost 50% more per bottle.  How much does he spend on everything?
    scotch_cost = 600
    number_of_cognac_bottles = 2 * x1
    cost_per_bottle_of_scotch = scotch_cost / x1
    cost_per_bottle_of_cognac = 1.5 * cost_per_bottle_of_scotch
    total_cognac_cost = number_of_cognac_bottles * cost_per_bottle_of_cognac
    total_cost = total_cognac_cost + scotch_cost
    return total_cost