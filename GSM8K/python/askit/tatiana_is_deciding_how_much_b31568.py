# Recompilation count: 0
def tatiana_is_deciding_how_much_b31568(x1, x2, x3) -> int:
    # Tatiana is deciding how much of her weekend she wants to spend playing soccer. She has'x1'hours on Saturday and'x2'hours on Sunday. She is dividing her time between soccer, video games, and reading. If she reads for'x3'hours and plays video games for 1/3 of the remaining time, what percentage of her weekend does she spend playing soccer?
   
    total_time = x1 + x2  # total hours over the weekend
    remaining_time_after_reading = total_time - x3  # remaining time after reading
    
    time_spent_on_video_games = remaining_time_after_reading / 3  # time spent on video games
    
    time_spent_playing_soccer = remaining_time_after_reading - time_spent_on_video_games  # time spent on playing soccer
    
    percentage_time_spent_on_soccer = (time_spent_playing_soccer / total_time) * 100  # percentage time spent on soccer

    return int(percentage_time_spent_on_soccer)  # return percentage as integer