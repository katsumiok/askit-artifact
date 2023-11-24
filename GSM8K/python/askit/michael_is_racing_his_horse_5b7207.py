# Recompilation count: 0
def michael_is_racing_his_horse_5b7207(x1, x2) -> int:
    # Michael is racing his horse and notices that for every mile the horse runs, he eats 1/2 a bail of hay. A bail of hay costs $3. If his horse runs for'x1'minutes at 32MPH, and Michael has six'x2'dollar bills, how much change does he have after he buys the hay?
    
    # First, we need to determine the distance travelled by the horse
    distanceInMiles = (x1/60) * 32    # as speed=distance/time so distance = speed * time
    
    # Then, we calculate the number of bails of hay the horse eats
    number_of_bails = distanceInMiles * 0.5 # as for every mile the horse runs, he eats 1/2 a bail of hay
    
    # Since each bail of hay costs $3, we determine the total cost
    cost = number_of_bails * 3
    
    # Michael has six'x2'dollar bills
    amount_michael_has = 6 * x2
    
    # We'll then subtract the cost from the total money Michael has to find out how much he has left
    change = amount_michael_has - cost
    
    return change