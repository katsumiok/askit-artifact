# Recompilation count: 0
def a_car_in_the_fast_cc0b2c(x1, x2) -> int:
    # A car in the fast lane is traveling at'x1'miles/hour. A car in the slow lane is traveling at half that speed. If the car in the fast lane traveled for a total of'x2'miles, calculate the time the car in the slow lane took to cover the same distance?
    # The time taken can be computed by the formula time = distance/speed. 

    # speed of car in slow lane is half of that in fast lane
    speed_slow_lane = x1 / 2  

    # time taken by car in slow lane to travel the same distance
    time_slow_lane = x2 / speed_slow_lane 

    return time_slow_lane