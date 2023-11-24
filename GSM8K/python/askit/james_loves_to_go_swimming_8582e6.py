# Recompilation count: 0
def james_loves_to_go_swimming_8582e6(x1) -> int:
    # James loves to go swimming and has to swim across a 20-mile lake.  He can swim at a pace of'x1'miles per hour.  He swims 60% of the distance.  After that, he stops on an island and rests for half as long as the swimming time.  He then finishes the remaining distance while going half the speed.  How long did it take him to get across the lake?

    # 60% of 20 miles
    first_distance = 20 * 0.60
    # The time it took to swim the first distance
    first_time = first_distance / x1
    # The rest time
    rest_time = first_time / 2
    # The remaining distance
    remaining_distance = 20 - first_distance
    # The time it took to swim the remaining distance at half the speed
    second_time = remaining_distance / (x1/2)
    # The total time was the sum of the first swimming time, the rest time, and the second swimming time.
    total_time = first_time + rest_time + second_time
    return total_time