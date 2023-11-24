# Recompilation count: 0
def nate_s_dog_can_dig_f3e413(x1, x2, x3) -> int:
    # Nate's dog can dig six holes a day. He digs for 'x1' days while Nate is on vacation. 
    # When Nate gets home, he starts filling in 'x2' holes a day, but the dog keeps digging 'x3' new holes every night. 
    # How many weeks does it take him to fill in all the holes?

    # Total dug holes by dog while Nate is on vacation
    total_holes = x1 * 6
    
    # Total holes filled and dug per day when Nate gets home
    hole_diff_per_day = x2 - x3
    
    # Total number of days to fill all the holes
    total_days = total_holes / hole_diff_per_day

    # Convert days to weeks
    total_weeks = total_days / 7
    
    # ceil the number of weeks because Nate can't work for a fraction of a week
    # import math for ceil function
    import math
    total_weeks = math.ceil(total_weeks)
    
    return total_weeks