# Recompilation count: 0
def heather_s_razors_come_x1_d9cae6(x1, x2) -> int:
    # Heather's razors come'x1'to a pack and cost $4.00 a pack.  They are currently on sale for buy one get one free.  
    # She also has a $2.00 coupon.  How much will each individual razor cost, in cents, after the discount if she buys'x2'packs of razors?
    
    # calculate the total cost of buying 'x2' packs of razors with the current sale (buy one get one free)
    total_cost = (x2 * 4) / 2
    
    # subtract the $2.00 coupon
    total_cost -= 2
    
    # calculate the total number of razors she will get
    total_razors = x1 * x2
    
    # calculate the cost of each individual razor in cents
    cost_per_razor = (total_cost / total_razors) * 100
    
    return int(cost_per_razor)