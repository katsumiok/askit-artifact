# Recompilation count: 0
def rani_is_obsessed_with_sports_f47650(x1, x2) -> int:
    # Given the rate of the 2nd fastest car compared to the average car (x1) and the speed of the average car (x2)
    # We first calculate the speed of the 2nd fastest car
    second_fastest_car_speed = x1 * x2
    
    # The fastest car is said to be 1.25 times faster than the 2nd fastest car
    fastest_car_speed = 1.25 * second_fastest_car_speed
    
    # Return the speed of the fastest car
    return fastest_car_speed