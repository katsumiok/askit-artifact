# Recompilation count: 0
def brian_s_friend_bobby_has_f9210b(x1, x2, x3, x4) -> int:
    # Brian's friend Bobby has 'x1' fewer than 'x2' times as many video games as Brian does.  
    # If Brian has 'x3' video games but lost 'x4' right before the comparison was made, how many does Bobby have?
    
    # Calculating the number of video games Brian has after he lost 'x4' video games
    brian_games = x3 - x4
    
    # Bobby has 'x1' fewer than 'x2' times as many video games as Brian does
    bobby_games = x2 * brian_games - x1
    
    return bobby_games