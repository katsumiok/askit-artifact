# Recompilation count: 0
def a_farmer_is_buying_feed_9cf619(x1) -> int:
    # calculate total weight of all feed
    total_weight = 2*1 + 4*12 + 42*75 + 20*65
    # divide total weight by truck capacity 'x1' and round up to the nearest whole number
    # we need to import math library to use 'ceil' function which rounds up a number
    import math
    trips = math.ceil(total_weight/x1)
    return trips