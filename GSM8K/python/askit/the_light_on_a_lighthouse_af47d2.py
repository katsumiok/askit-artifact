# Recompilation count: 0
def the_light_on_a_lighthouse_af47d2(x1, x2, x3) -> int:
    
    # calculate the time for one blink
    time_for_one_blink = x2 / x1
    
    # calculate the total time for 'x3' blinks
    total_time = time_for_one_blink * x3
    
    return total_time