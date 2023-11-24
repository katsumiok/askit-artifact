# Recompilation count: 0
def dana_can_run_at_a_76a60d(x1) -> int:
    # Dana can run at a rate of speed four times faster than she can walk, but she can skip at a rate of speed that is half as fast as she can run. If she can skip at'x1'miles per hour, how many miles can she travel in six hours if she spends one-third of the time running and two-thirds of the time walking?
    running_speed = 2 * x1  # Dana's running speed is twice the skipping speed.
    walking_speed = running_speed / 4  # Dana's walking speed is a quarter of her running speed.
    
    time_running = (1/3) * 6  # One third of six hours for running.
    time_walking = (2/3) * 6 # Two thirds of six hours for walking.
    
    distance_running = time_running * running_speed  
    distance_walking = time_walking * walking_speed  
    
    total_distance = distance_running + distance_walking
    
    return total_distance