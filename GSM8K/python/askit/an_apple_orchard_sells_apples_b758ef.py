# Recompilation count: 0
def an_apple_orchard_sells_apples_b758ef(x1) -> int:
    # An apple orchard sells apples in bags of 10. The orchard sold a total of'x1'apples one day. How much did an orchard earn for selling this at $5 per bag?
    # First, we'll find out how many whole bags of apples were sold (since it's impossible to sell a fractional bag). 
    # This can be done by dividing the total number of apples by the number of apples in each bag (10) and use floor division (//) to get the whole number.
    # then multiply with the price per bag ($5) and we'll get the total earnings.
    return (x1 // 10) * 5