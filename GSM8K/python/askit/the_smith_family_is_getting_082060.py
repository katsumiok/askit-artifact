# Recompilation count: 0
def the_smith_family_is_getting_082060(x1, x2, x3) -> int:
    # calculate the volume of the pool
    pool_volume = x1 * x2 * x3
    # calculate how many gallons of water they need
    gallons_of_water_needed = pool_volume * 5.9
    # calculate the cost to fill the pool
    cost_to_fill_pool = gallons_of_water_needed * 0.10
    return round(cost_to_fill_pool)