# Recompilation count: 0
def the_llesis_family_drove_and_9c8434(x1, x2, x3) -> int:
    # The Llesis family drove and hiked'x1'hours to their vacation spot. 
    # They drove an average of'x2'miles per hour 
    # and hiked an average of'x3'miles per hour less than half their speed when they drive. 
    # If it took them 1.5 hours to hike, how far was their vacation spot?

    driving_time = x1 - 1.5
    hiking_speed = x2 / 2 - x3

    driving_distance = driving_time * x2
    hiking_distance = 1.5 * hiking_speed

    total_distance = driving_distance + hiking_distance

    return total_distance