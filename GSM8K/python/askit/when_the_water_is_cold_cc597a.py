# Recompilation count: 0
def when_the_water_is_cold_cc597a(x1, x2, x3) -> int:
    # When the water is cold Ray swims a mile in'x1'minutes. 
    # When the water is warm Ray swims a mile in'x2'minutes more than twice as long. 
    # How much longer does Ray take to swim'x3'miles on a hot day than a cold day?

    cold_time = x1 * x3
    hot_time = (2 * x1 + x2) * x3

    return hot_time - cold_time