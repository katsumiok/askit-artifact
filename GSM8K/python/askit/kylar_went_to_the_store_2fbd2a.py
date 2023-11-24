# Recompilation count: 0
def kylar_went_to_the_store_2fbd2a(x1) -> int:
    # calculate the total cost of 'x1' glasses
    full_price = 5
    discounted_price = 5 * 0.6
    total_cost = 0

    for i in range(1, x1 + 1): 
        if i % 2 == 0:
            total_cost += discounted_price 
        else:
            total_cost += full_price 
            
    return int(total_cost)