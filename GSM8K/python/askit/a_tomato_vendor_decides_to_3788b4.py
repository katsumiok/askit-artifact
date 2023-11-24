# Recompilation count: 0
def a_tomato_vendor_decides_to_3788b4(x1) -> int:
    # A tomato vendor decides to switch who he buys his tomatoes for.  
    # He sells'x1'tomatoes a day.  He used to buy them for $.5 each but he gets a new vendor who sells them for $.4 each.
    # How much money does he save a week?
    
    old_cost = 0.5 * x1 * 7  # Old cost for 1 week
    new_cost = 0.4 * x1 * 7  # New cost for 1 week
    future_savings = old_cost - new_cost
    
    return future_savings 