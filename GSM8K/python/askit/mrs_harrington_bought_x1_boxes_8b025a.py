# Recompilation count: 0
def mrs_harrington_bought_x1_boxes_8b025a(x1, x2, x3) -> int:
    # Mrs. Harrington bought'x1'boxes of oranges at the market.
    # She gave her mom and her sister'x2'boxes of oranges each.
    # Then she kept 1/4 of the oranges and sold the rest.
    # How many oranges did Mrs. Harrington sell if each box contains'x3'oranges?
    
    # calculating total number of oranges
    total_oranges = x1 * x3
    
    # subtracting the oranges given to mom and sister
    remaining_oranges = total_oranges - (2 * x2 * x3)
    
    # calcualting the number of oranges sold
    oranges_sold = remaining_oranges * (3/4)

    return int(oranges_sold)