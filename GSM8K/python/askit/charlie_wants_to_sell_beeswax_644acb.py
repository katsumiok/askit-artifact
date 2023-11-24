# Recompilation count: 0
def charlie_wants_to_sell_beeswax_644acb(x1, x2) -> int:
    # Charlie wants to sell beeswax candles.  
    # For every pound of beeswax, he can make 'x1' tapered candles.  
    # One pound of beeswax and the wicks cost $10.00 in supplies.   
    # If he sells each candle for $2.00 each, what is his net profit if he makes and sells 'x2' candles?
    
    # Calculation of total pounds of beeswax used
    beeswax_used = x2 / x1
    
    # Calculation of total costs for beeswax and wicks
    total_costs = beeswax_used * 10
    
    # Calculation of total revenue from selling candles
    total_revenue = x2 * 2
    
    # Calculation of net profit
    net_profit = total_revenue - total_costs
    
    return net_profit