# Recompilation count: 0
def a_water_tank_is_filled_923af7(x1, x2) -> int:
    # A water tank is filled with'x1'liters of water. Celine used'x2'liters of water from the tank to water her small garden. She was then able to collect rainwater that is twice as much as what was left. How many liters of water are in the tank now?
    remaining_water = x1 - x2
    collected_rainwater = 2 * remaining_water
    total_water_now = remaining_water + collected_rainwater
    return total_water_now