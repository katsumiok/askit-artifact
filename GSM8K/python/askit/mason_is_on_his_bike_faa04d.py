# Recompilation count: 0
def mason_is_on_his_bike_faa04d(x1, x2, x3) -> int:
    # Mason is on his bike journey at a rate of'x1'miles per hour. 
    # He travels for'x2'hours, takes some rest, and then goes on for another'x3'hours. 
    # How many miles has he traveled in total?
    
    total_distance = x1 * (x2 + x3)
    
    return total_distance