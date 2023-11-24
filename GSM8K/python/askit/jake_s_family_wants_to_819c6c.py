# Recompilation count: 0
def jake_s_family_wants_to_819c6c(x1, x2) -> int:
    # calculate the cost of the two different amusement parks and determine the savings
    park1_adult_cost = 26 * x1
    park1_child_cost = 12 * x2
    park1_total_cost = park1_adult_cost + park1_child_cost 
    
    park2_adult_cost = 14 * x1
    park2_child_cost = 10 * x2
    park2_total_cost = park2_adult_cost + park2_child_cost  
    
    savings = park1_total_cost - park2_total_cost 
    return savings