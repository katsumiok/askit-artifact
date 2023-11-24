# Recompilation count: 0
def martha_s_cat_is_x1_cf0b49(x1, x2, x3) -> int:
    # Martha's cat is'x1'times faster than her turtle. If the cat can run'x2'feet/second, 
    # how many feet can her turtle crawl in'x3'seconds?
    
    # The turtle's speed is 'x2' divided by 'x1'.
    turtle_speed = x2 / x1
    
    # The distance that the turtle can crawl in 'x3' seconds is the turtle's speed multiplied by 'x3'.
    turtle_distance = turtle_speed * x3
    
    return turtle_distance