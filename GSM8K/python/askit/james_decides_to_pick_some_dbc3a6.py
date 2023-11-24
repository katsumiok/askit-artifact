# Recompilation count: 0
def james_decides_to_pick_some_dbc3a6(x1) -> int:
    # James decides to pick some blueberries. It cost $20 to go picking and then another $1.5 per pound.
    # He picked'x1'pounds of blueberries. How much did he save compared to buying at the store for $2.5 a pound?

    # cost of picking
    cost_of_picking = x1 * 1.5 + 20 

    # cost at the store
    cost_at_store = x1 * 2.5 

    # calculating the savings
    savings = cost_at_store - cost_of_picking

    return savings