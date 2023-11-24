# Recompilation count: 0
def in_the_first_half_of_35b884(x1, x2, x3) -> int:
    # In the first half of a soccer match, team A scores'x1'goals while team B scores'x2'goals fewer than team A. In the second half, team A scores 1/4 of the number of goals scored by team B, which scores'x3'times the number of goals it scored in the first half. What's the total number of goals scored in the match?
    
    # Goals scored by team A and B in the first half
    team_A_first_half_goals = x1
    team_B_first_half_goals = x1 - x2

    # Goals scored in the second half
    team_B_second_half_goals = team_B_first_half_goals * x3
    team_A_second_half_goals = team_B_second_half_goals / 4

    # Total goals in the match
    total_goals = team_A_first_half_goals + team_B_first_half_goals + team_A_second_half_goals + team_B_second_half_goals

    return int(total_goals)