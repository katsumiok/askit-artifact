# Recompilation count: 0
def jim_spends_x1_hours_watching_69e6ae(x1, x2, x3) -> int:
    # Jim spends'x1' hours watching TV and then decides to go to bed and reads for half as long.  
    # He does this 'x2' times a week.  
    # How many hours does he spend on TV and reading in 'x3' weeks?
    
    total_hours_per_day = x1 + x1/2  # Hours spent on TV and reading in a day
    total_hours_per_week = total_hours_per_day * x2  # Total hours spent in a week
    total_hours_in_x3_weeks = total_hours_per_week * x3  # Total hours spent in x3 weeks

    return total_hours_in_x3_weeks