# Recompilation count: 0
def steve_loves_playing_video_games_4363d4(x1, x2, x3, x4, x5, x6) -> int:
    # Steve loves playing video games.  His parents get him a console along with'x1'games for his birthday.  He saves up enough money to buy'x2'game per month for a year,
    # and then the following year he starts buying'x3'games a month.  For the third year he buys'x4'games a month as he has a new part-time job that makes him more money.
    # He also gets'x5'games for Christmas every year.  How many games does Steve have after'x6'years?
    
    game_count = x1
    christmas_bonus = x5 * x6
    if x6 >= 1:
        game_count += x2 * 12
    if x6 >= 2:
        game_count += x3 * 12
    if x6 >= 3:
        game_count += x4 * 12 * (x6 - 2)
        
    return game_count + christmas_bonus