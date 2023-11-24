# Recompilation count: 0
def john_buys_twice_as_many_d52087() -> int:
    # John buys twice as many red ties as blue ties.  The red ties cost 50% more than blue ties.  
    # He spent $200 on blue ties that cost $40 each. How much did he spend on ties?
    
    # calculate the number of blue ties John bought
    blue_ties_num = 200 // 40
    
    # calculate the number of red ties, which is twice the blue ones
    red_ties_num = blue_ties_num * 2
    
    # the cost of a red tie is 50% more expensive than a blue tie,
    # so we just have to multiply the blue tie price by 1.5 
    red_tie_cost = 40 * 1.5
    
    # now we just have to multiply the number of red ties by the cost of each tie
    total_red_ties_cost = red_ties_num * red_tie_cost
    
    # add up the cost of blue ties and red ties, and return
    total_cost = total_red_ties_cost + 200
    
    return total_cost