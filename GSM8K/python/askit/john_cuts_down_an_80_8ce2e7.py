# Recompilation count: 0
def john_cuts_down_an_80_8ce2e7(x1) -> int:
    # calculate the total length of the tree that can be made into logs
    tree_length = 80 * 0.8
    
    # calculate the number of 4-foot logs
    num_logs = tree_length // 4
    
    # calculate the total amount of planks
    total_planks = num_logs * x1
    
    # calculate the total profit
    total_profit = total_planks * 1.2
    
    return int(total_profit)