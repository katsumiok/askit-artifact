# Recompilation count: 0
def susan_earns_5_every_x1_a03fff(x1, x2, x3) -> int:
    # Susan earns $5 every 'x1' minutes for an online task she does. 
    # If she works between 'x2' a.m. and 'x3' a.m. and pauses in between for half an hour, how much money does she earn for the online task?
    
    # Convert working hour differences to minutes
    working_time_min = (x3 - x2) * 60
    
    # Minus the paused time
    working_time_min -= 30
    
    # Calculate how much times susan can complete tasks fully
    task_count = working_time_min // x1
  
    # Calculate and return total earnings
    return task_count * 5