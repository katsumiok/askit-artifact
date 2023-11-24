# Recompilation count: 0
def two_track_teams_are_competing_dae501(x1, x2, x3, x4, x5, x6, x7, x8) -> int:
    # Calculate time for well-rounded team.
    well_rounded_team_time = x5 * 4

    # Calculate time for less well-rounded team.
    less_well_rounded_team_time = x7 + (x7-x8) + (x7-2*x8) + (x7-3*x8)

    # Return difference in time between the two teams.
    return abs(well_rounded_team_time - less_well_rounded_team_time)