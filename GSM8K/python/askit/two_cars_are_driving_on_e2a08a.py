# Recompilation count: 0
def two_cars_are_driving_on_e2a08a(x1, x2, x3) -> int:
    # Two cars are driving on a highway. The first car is traveling at an average speed of 'x1' miles 
    # per hour when the second car passes it at an average speed of 'x2' miles per hour. If both cars 
    # continue on the highway at the same speed, how many miles will separate them after 'x3' hours?
    
    # The difference in speed between the two cars
    speed_difference = x2 - x1
    
    # The distance between the cars after 'x3' hours will be the speed difference multiplied by time
    separation_distance = speed_difference * x3
    
    return separation_distance