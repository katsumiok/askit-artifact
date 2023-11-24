# Recompilation count: 0
def the_ratio_of_men_to_9da698(x1) -> int:
    # The ratio of men to women on a bus is 5:9. If the total number of passengers on the bus is 84, and'x1'women alight from the bus at the next stop, how many women have remained on the bus?
    total_passengers = 84
    total_ratio = 5 + 9  # sum of the men-women ratio.
    # 9 out of 14 (total_ratio) parts are women
    woman_passengers = (9 / total_ratio) * total_passengers
    #if 'x1' women alight from the bus
    remaining_women = woman_passengers - x1
    return int(remaining_women)