# Recompilation count: 0
def archie_buys_beef_jerky_that_eb02f6(x1, x2) -> int:
    # Archie buys beef jerky that comes'x1'sticks to a bag and costs $18.00 per bag.
    # If Archie buys'x2'bag while they're $3.00 off a bag, how much will each stick of jerky cost in cents?
    
    total_cost = (18 - 3) * x2  # The total cost for 'x2' bags when there's a $3.00 discount
    total_sticks = x1 * x2  # The total number of beef jerky sticks Archie buys

    # convert the cost to cents and then divide by the number of sticks to get the cost per stick.
    cost_per_stick = (total_cost * 100) / total_sticks 
    return int(cost_per_stick)