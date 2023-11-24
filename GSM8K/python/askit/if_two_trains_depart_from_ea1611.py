# Recompilation count: 0
def if_two_trains_depart_from_ea1611(x1, x2) -> int:
    # If two trains depart from a station in opposite directions, and one train is traveling'x1'miles an hour while the other is traveling half that distance per hour, how far apart are they from each other after'x2'hours?
    train1_speed = x1 # speed of the first train
    train2_speed = x1 / 2 # speed of the second train is half of the first train 
    total_distance = (train1_speed + train2_speed) * x2 # total distance is the sum of distances covered by both trains
    return total_distance