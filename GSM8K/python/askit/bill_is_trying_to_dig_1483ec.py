# Recompilation count: 0
def bill_is_trying_to_dig_1483ec(x1, x2, x3) -> int:
    # Bill is trying to dig a well in his backyard. He can dig'x1'feet/hour through soil and half that fast through clay. If he has to dig through'x2'feet of soil and'x3'feet of clay, how long will it take him to dig the well?
    soil_time = x2 / x1
    clay_time = x3 / (x1 / 2)
    total_time = soil_time + clay_time
    return total_time