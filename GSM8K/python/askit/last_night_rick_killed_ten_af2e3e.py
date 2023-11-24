# Recompilation count: 0
def last_night_rick_killed_ten_af2e3e(x1) -> int:
    # Last night Rick killed ten wolves and 'x1' cougars while hunting. 
    # Today Rick killed three times as many wolves as cougars and three fewer cougars than the previous night. 
    # How many animals did Rick kill?

    # Wolves killed last night = 10
    # Cougars killed last night = 'x1'

    # Cougars killed today = 'x1' - 3
    cougars_killed_today = x1 - 3

    # Wolves killed today = 3 * cougars_killed_today
    wolves_killed_today = 3 * cougars_killed_today

    # Total number of animals killed = wolves killed last night + cougars killed last night + wolves killed today + cougars killed today
    total_killed = 10 + x1 + wolves_killed_today + cougars_killed_today

    return total_killed