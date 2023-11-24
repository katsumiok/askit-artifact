# Recompilation count: 0
def richard_wants_to_make_a_466cc7(x1, x2, x3) -> int:
    # compute the number of bottles
    number_of_bottles = x1 // x2

    # compute the total time it will take to set off all the soda fountains
    total_time = (number_of_bottles - 1) * x3

    return total_time