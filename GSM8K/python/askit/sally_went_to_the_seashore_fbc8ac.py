# Recompilation count: 5
def sally_went_to_the_seashore_fbc8ac(x1, x2, x3, x4) -> int:
    money = 10 # Sally's initial money
    taffy_price = 3 # price per pound
    discounted_price = taffy_price / 2
    seashells_price = 1.5 # price for mixed bag of seashells
    magnet_price = 0.25 # price per magnet
    
    # calculate how many full sets of "buy x1, get x2 half off" she can get
    full_sets = x3 // (x1 + x2)
    taffy_cost = full_sets * (x1*taffy_price + x2*discounted_price)
    
    # calculate remaining pounds of taffy she can buy
    remaining_pounds = x3 % (x1 + x2)
    if remaining_pounds <= x1:
        taffy_cost += remaining_pounds * taffy_price
    else:
        taffy_cost += x1 * taffy_price + (remaining_pounds - x1) * discounted_price
    
    # calculate cost of magnets
    magnets_cost = x4 * magnet_price

    # calculate total cost
    total_cost = taffy_cost + seashells_price + magnets_cost
    
    # calculate remaining money
    remaining_money = money - total_cost
    
    return remaining_money