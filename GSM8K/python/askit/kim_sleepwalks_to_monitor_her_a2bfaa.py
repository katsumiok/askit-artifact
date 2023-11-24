# Recompilation count: 0
def kim_sleepwalks_to_monitor_her_a2bfaa(x1, x2, x3) -> int:
    
    total_sleeping_time = 0
    
    # adding the amount of time she slept before midnight
    if x1 <= 12:
        total_sleeping_time += (12 - x1)*60
    else:
        total_sleeping_time += (24 - x1)*60
    
    # adding the amount of time she slept after midnight (before waking up)
    total_sleeping_time += x2*60
    
    # subtracting the time she was sleepwalking
    total_sleeping_time -= (2*60 + 38) - (2*60 + 15)
    
    # subtracting the time she woke up earlier to go to the bathroom
    total_sleeping_time -= x3

    return total_sleeping_time