# Recompilation count: 0
def if_every_second_a_bubbling_f074bf(x1, x2) -> int:
    # If every second, a bubbling spring creates a new jellyfish,
    # how many jellyfish would 'x1' springs working at the same rate create in 'x2' hours?
    seconds_in_hour = 3600    # 60 seconds/minute * 60 minutes/hour
    total_jellyfish = x1 * x2 * seconds_in_hour
    return total_jellyfish