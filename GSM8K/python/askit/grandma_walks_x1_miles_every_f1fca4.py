# Recompilation count: 1
def grandma_walks_x1_miles_every_f1fca4(x1, x2, x3, x4) -> int:
    # Grandma walks'x1'miles every day on her favorite walking trail, which includes'x2'miles 
    # of walking on the beach and'x3'mile of walking on the sidewalk. 
    # On the sidewalk, Grandma walks at twice the rate of speed that she does on the beach.
    # If'x4'minutes of her walk is spent on the beach, how long does it take for her to complete the 
    # entire 3-mile walk, in minutes?
    
    # Calculate the speed on the beach.
    beach_speed = x2 / x4
    
    # Calculate the speed on the sidewalk (twice the speed on the beach).
    sidewalk_speed = 2 * beach_speed
    
    # Calculate the time spent walking on the sidewalk.
    sidewalk_time = x3 / sidewalk_speed
    
    # Return the total time spent walking (both on the beach and on the sidewalk).
    return x4 + sidewalk_time