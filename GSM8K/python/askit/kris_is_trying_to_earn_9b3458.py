# Recompilation count: 0
def kris_is_trying_to_earn_9b3458(x1, x2, x3) -> int:
    # Kris is trying to earn a video game achievement for playing a total of 'x1' hours. 
    # If Kris plays for half an hour every day for 'x2' weeks then plays for 'x3' hours every day for a week, 
    # how many hours does she still need to play to earn the achievement?
    
    # calculate total hours played in x2 weeks, assuming a week has 7 days
    total_hours_in_x2_weeks = 0.5 * 7 * x2
    
    # calculate total hours played in last week
    total_hours_in_last_week = x3 * 7

    # total hours played 
    total_hours_played = total_hours_in_x2_weeks + total_hours_in_last_week

    # hours needed to earn the achievement
    hours_needed = x1 - total_hours_played

    return hours_needed