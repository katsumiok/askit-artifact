# Recompilation count: 0
def zeke_s_baseball_team_has_76f699(x1, x2) -> int:
    # Zeke's baseball team has'x1'more players than Carlton's. If Carlton's team has'x2'players, how many players are there in both teams combined?
    
    # first, calculate how many players Zeke's team has
    zekes_team = x2 + x1

    # now, add the numbers of players from both teams
    total_players = zekes_team + x2

    return total_players