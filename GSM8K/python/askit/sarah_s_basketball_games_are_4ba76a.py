# Recompilation count: 0
def sarah_s_basketball_games_are_4ba76a(x1, x2) -> int:
    # Sarah’s basketball games are 'x1' quarters that are each 'x2' minutes long. 
    # In the last quarter, there was a tie so the game was extended for five minutes. 
    # How long did the entire game last?

    game_duration = (x1 * x2) + 5
    return game_duration