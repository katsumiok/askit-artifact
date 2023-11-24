# Recompilation count: 0
def mary_is_an_avid_gardener_4b7ec0(x1, x2, x3, x4) -> int:
    # Calculate the total number of plants she had before receiving new ones
    total_plants_initially = x2 * x3

    # Calculate the total plants after receiving new ones
    total_plants_after_receiving = total_plants_initially + x1

    # Calculate the total plants she will give away
    total_plants_given_away = x4 * x3

    # Calculate the total plants remaining after giving away
    total_plants_remaining = total_plants_after_receiving - total_plants_given_away

    return total_plants_remaining