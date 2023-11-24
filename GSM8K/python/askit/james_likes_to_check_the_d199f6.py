# Recompilation count: 0
def james_likes_to_check_the_d199f6(x1) -> int:
    # James likes to check the coin return of the vending machine for change. One day he finds a quarter, two nickels, and'x1'dimes. How much money in cents does James have?
    quarter = 25 # value of a quarter in cents
    nickel = 5  # value of a nickel in cents
    dime = 10  # value of a dime in cents
    
    # calculate total money
    total_money = quarter + (2 * nickel) + (x1 * dime)

    return total_money