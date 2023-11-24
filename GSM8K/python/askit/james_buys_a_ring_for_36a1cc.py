# Recompilation count: 0
def james_buys_a_ring_for_36a1cc() -> int:
    diamond_cost = 600
    gold_cost = 300
    premium_rate = 0.3
    
    total_cost = diamond_cost + gold_cost
    cost_with_premium = total_cost + (total_cost * premium_rate)
    
    return int(cost_with_premium)