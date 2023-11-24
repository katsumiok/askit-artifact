# Recompilation count: 0
def the_ratio_of_popsicles_that_6c118b() -> int:
    total_ratio = 5 + 6 # Bettry and Sam's ratio added together
    total_popsicles = 165
    # One ratio unit's worth of popsicles
    one_ratio = total_popsicles / total_ratio
    # The number of popsicles Betty and Sam have, respectively
    betty_popsicles = 5 * one_ratio
    sam_popsicles = 6 * one_ratio
    # Sam has this many more popsicles than Betty
    more_popsicles = sam_popsicles - betty_popsicles
    return int(more_popsicles)