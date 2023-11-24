# Recompilation count: 0
def a_watermelon_farm_produced_x1_3ee7e9(x1) -> int:
    melons_after_first_harvest = x1 * 0.7 # Ashlyn took 30% of the melons, so 70% remains
    melons_after_second_harvest = melons_after_first_harvest * 0.25 # Then, she took 3/4 of the remaining melons, so 1/4 remains
    melons_not_ready = round(melons_after_second_harvest) # Round to the nearest whole number, since you cannot have a fraction of a melon
    return melons_not_ready