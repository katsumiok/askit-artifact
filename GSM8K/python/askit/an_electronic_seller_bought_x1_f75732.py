# Recompilation count: 0
def an_electronic_seller_bought_x1_f75732(x1) -> int:
    # An electronics seller bought 'x1' phones for $700 each and gives the seller $4000 in dollar bills.
    # How much will the seller give back in change?
    total_cost = x1 * 700
    change = 4000 - total_cost
    return change