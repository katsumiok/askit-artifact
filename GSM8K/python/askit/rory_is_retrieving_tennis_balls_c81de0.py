# Recompilation count: 0
def rory_is_retrieving_tennis_balls_c81de0(x1) -> int:
    # Let's denote the quantity of balls from the second set as 's'.
    # According to the problem, in the first set Rory retrieves 's + 4' balls, and in the third set he retrieves 's / 2' balls.
    # We know that 's + (s + 4) + (s / 2) = x1', so we can solve this linear equation to find 's' (balls from the second set).
    # The task is to find the quantity of balls from the first set which is 's + 4'.

    # Solving the equation for 's'
    s = (2*x1 - 8) / 5

    # Return the quantity of balls from the first set 
    return s + 4