# Recompilation count: 0
def a_football_team_played_x1_1d3e2b(x1, x2) -> int:
    # A football team played'x1'games. They won'x2'more than they lost. How many did they win?
    # If they won x2 more than they lost, it means 
    # number of wins - number of loses = x2 and number of wins + number of loses = x1
    # Solving these 2 equations, we get number of wins = (x1 + x2)/2
    return (x1 + x2) // 2