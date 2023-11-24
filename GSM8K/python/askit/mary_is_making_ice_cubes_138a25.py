# Recompilation count: 0
def mary_is_making_ice_cubes_138a25(x1, x2) -> int:
    # ASSUMPTION: Here I'm assuming that the number of strawberry cubes are always more than 4.
    # For each strawberry cube, she makes 'x1' blueberry cubes. Therefore, we can express the total 
    # number of cubes 'x2' as the sum of strawberry cubes and blueberry cubes.
    
    # Say 's' is the number of strawberry cubes and 'b' is the number of blueberry cubes.
    # Given, b = x1*s - 4 and x2 = s + b. Substitute 'b' from the 1st equation into 2nd we get:
    # x2 = s + x1*s - 4. Simplifying that we get the number of strawberry cubes:
    s = x2 / (x1 + 1) + 4 / (x1 + 1)
    
    # Now we substitute 's' into b = x1*s - 4 to get the number of blueberry cubes.
    # Return this value as the result.
    return x1 * s - 4