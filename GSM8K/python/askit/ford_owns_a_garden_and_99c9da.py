# Recompilation count: 0
def ford_owns_a_garden_and_99c9da(x1, x2, x3, x4) -> int:
    # the number of roses ford grows in a month
    roses_grown = x1 * 4
    # the total orders from the flower shops per month
    total_orders = (x2 + x3 + x4) * 4
    # how many roses ford lacking
    lack_roses = total_orders - roses_grown 
    return lack_roses