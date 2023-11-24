# Recompilation count: 0
def a_football_team_has_x1_70dd0d(x1) -> int:
    # A football team has 'x1' members.  There are twice as many players on the offense as there is on the defense. There is half the number of players on the special teams as there is on the defense.  How many players are on the defense?
    # x1 = defense + offense + special_teams
    # offense = 2 * defense
    # special_teams = 0.5 * defense
    # x1 = defense + 2*defense + 0.5*defense
    # x1 = 3.5 * defense
    defense = x1 / 3.5
    return int(defense)