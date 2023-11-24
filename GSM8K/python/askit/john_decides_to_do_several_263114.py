# Recompilation count: 0
def john_decides_to_do_several_263114(x1, x2, x3) -> int:
    # John decides to do several activities while out on vacation.  
    # He spends'x1'hours boating and half that time swimming.  
    # He also watched'x2'different shows which were'x3'hours each.  
    # This was 30% of the time he spent.  
    # He spent 40% of his time sightseeing.  
    # How much time did he spend sightseeing?

    # First calculate total time John spent
    total_time = x1 + x1/2 + x2*x3

    # Since the show time is 30% of the total, calculate total
    total_time = total_time / 0.3

    # Calculate sightseeing time, which is 40% of total
    sightseeing_time = total_time * 0.4
    
    return round(sightseeing_time)