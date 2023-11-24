# Recompilation count: 0
def jaime_places_eggs_on_the_5ec100(x1, x2, x3) -> int:
    # Jaime places eggs on the tray. Each tray can hold'x1'eggs. If he has'x2'eggs and'x3'trays, how many eggs won't he be able to place on the tray?
    total_capacity = x1 * x3
    if x2 > total_capacity:
        return x2 - total_capacity
    else:
        return 0