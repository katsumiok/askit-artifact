# Recompilation count: 0
def the_easter_egg_hunt_team_11fa1a(x1, x2, x3) -> int:
    # The Easter egg hunt team hid'x1'eggs. The Smith twins each found'x2'eggs. All the other eggs except'x3'were found by their friends. How many eggs did the friends find?
    total_eggs_found_by_twins = x2 * 2
    total_eggs_found_by_friends = x1 - total_eggs_found_by_twins - x3
    return total_eggs_found_by_friends