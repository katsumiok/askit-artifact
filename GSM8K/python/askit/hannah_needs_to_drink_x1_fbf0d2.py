# Recompilation count: 0
def hannah_needs_to_drink_x1_fbf0d2(x1, x2) -> int:
    # Hannah needs to drink'x1'ml of water for each kilometer she runs.
    # If her gym teacher tells her to run'x2'laps and each lap is 0.25 km,
    # how many milliliters of water will Hannah need to drink?
    total_distance = x2 * 0.25  # Calculate total distance in kilometers
    total_water = x1 * total_distance  # calculate total water needed
    return int(total_water)  # return as integer since water cannot be drunk in fractions