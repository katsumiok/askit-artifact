# Recompilation count: 3
def a_merchant_wants_to_make_dd13d4(x1) -> int:

    # initial cost of jewelry and electronic gadgets
    cost_jewelry = 5000 
    cost_gadgets = 8000

    # increase in market for jewelry and electronic gadgets
    increase_jewelry = 2.5 / 100 
    increase_gadgets = 1.2 / 100
    
    # calculate potential profit 
    profit_jewelry = cost_jewelry * increase_jewelry
    profit_gadgets = cost_gadgets * increase_gadgets
    
    # Selects the maximum profit from two purchase plans
    max_profit = max(profit_jewelry, profit_gadgets)
    
    return int(max_profit)