# Recompilation count: 0
def at_a_spa_iris_spent_22a8d3() -> int:
    # At a spa, Iris spent $400 to do her hair, 1/4 as much to do a manicure, and 3/4 as much money as a manicure to do a pedicure. How much money did she spend at the spa?
    
    # cost of hair
    hair = 400 
    
    # cost of manicure is 1/4 as much as hair
    manicure = hair / 4 
    
    # cost of pedicure is 3/4 as much as manicure
    pedicure = manicure * 3/4 
    
    # total cost is the sum of the cost of hair, manicure and pedicure
    total_cost = hair + manicure + pedicure 
    
    return int(total_cost) # return the total cost as an integer