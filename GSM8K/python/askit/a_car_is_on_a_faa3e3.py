# Recompilation count: 0
def a_car_is_on_a_faa3e3(x1, x2, x3, x4) -> int:
    # A car is on a road trip and drives'x1'mph for'x2'hours, and then'x3'mph for'x4'hour. What is the car's average speed in mph during this trip?
    total_distance = x1*x2 + x3*x4
    total_time = x2 + x4 
    average_speed = total_distance / total_time
    return average_speed