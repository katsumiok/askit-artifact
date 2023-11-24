# Recompilation count: 0
def a_basket_contains_x1_oranges_1984a3(x1, x2, x3) -> int:
    # A basket contains'x1'oranges among which'x2'is bad, 20% are unripe,'x3'are sour and the rest are good. How many oranges are good?
    # Calculate the total number of bad, unripe, and sour oranges
    total_bad_unripe_sour = x2 + int(0.2 * x1) + x3 
    # Subtract the total bad, unripe, sour oranges from the total number of oranges to get the number of good oranges
    good_oranges = x1 - total_bad_unripe_sour 
    return good_oranges