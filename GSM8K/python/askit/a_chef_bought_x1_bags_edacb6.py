# Recompilation count: 0
def a_chef_bought_x1_bags_edacb6(x1, x2) -> int:
    # A chef bought'x1'bags of onions. Each bag weighs'x2'pounds. A pound of onions cost $1.50. How much did the chef spend?
    total_weight = x1 * x2
    cost_per_pound = 1.50
    total_cost = total_weight * cost_per_pound
    return total_cost