# Recompilation count: 0
def tim_wanted_to_make_lemonade_dea80d(x1, x2, x3, x4) -> int:
    # Find the total number of cups needed
    total_cups = x1 * x4

    # For Allen's tart lemonade, twice as many cups are needed
    allen_cups = 2 * x1

    # Total cups needed
    total_cups += allen_cups

    # Figure out the number of lemons needed for each cup
    lemons_per_cup = x2 / x3

    # Total lemons needed
    total_lemons = total_cups * lemons_per_cup

    return round(total_lemons)