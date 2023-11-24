# Recompilation count: 0
def kalinda_is_working_on_a_f68a96(x1, x2) -> int:
    # Kalinda is working on a'x1'piece puzzle with her mom. Kalinda can normally add'x2'pieces per minute. Her mom can typically place half as many pieces per minute as Kalinda.  How many hours will it take them to complete this puzzle?
    
    # mom's speed
    mom_speed = x2 / 2
    
    # total speed of Kalinda and her mom
    total_speed = x2 + mom_speed
    
    # converting speed per minute to speed per hours
    total_speed_per_hour = total_speed * 60
    
    # time taken
    time_hours = x1 / total_speed_per_hour
    
    return time_hours