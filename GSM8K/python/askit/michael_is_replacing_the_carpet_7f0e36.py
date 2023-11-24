# Recompilation count: 0
def michael_is_replacing_the_carpet_7f0e36(x1, x2) -> int:
    # Michael is replacing the carpet in his bedroom.  The new carpet he's chosen costs $12 per square foot,
    # plus $2 per square foot for padding underneath.  His contractor charges $4 per square foot to remove 
    # the old carpet, and $34 per square foot to install the new carpet.  His bedroom measures 'x1' feet by 'x2' feet.
    # How much will it cost Michael to replace the carpet?

    # calculate the total area of the bedroom
    total_area = x1 * x2

    # calculate the cost for each part and sum them up
    cost = (total_area * 12) + (total_area * 2) + (total_area * 4) + (total_area * 34)

    return cost