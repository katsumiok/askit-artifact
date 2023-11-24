# Recompilation count: 0
def sophia_is_thinking_of_taking_59c54c(x1, x2, x3) -> int:
    # Sophia is thinking of taking a road trip in her car, and would like to know how far she can drive on a single tank of gas. She has traveled'x1'miles since last filling her tank, and she needed to put in'x2'gallons of gas to fill it up again. The owner's manual for her car says that her tank holds'x3'gallons of gas. How many miles can Sophia drive on a single tank of gas?
    
    # First, calculate the miles per gallon based on the miles she has driven and the gas she has filled
    miles_per_gallon = x1 / x2
    
    # Then, multiply that by the total number of gallons her tank holds to find the total distance she can drive on one tank
    distance = miles_per_gallon * x3
    
    return int(distance)