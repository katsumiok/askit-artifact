# Recompilation count: 0
def greg_has_an_alarm_set_f3f566() -> int:
    first_time = 4
    second_time = 3 * first_time
    third_time = second_time / 2
    total_rings = int(first_time + second_time + third_time) # convert float to int
    return total_rings