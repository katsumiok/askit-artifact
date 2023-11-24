# Recompilation count: 0
def chris_has_a_two_speed_5dcc00(x1, x2) -> int:
    # Chris has a two-speed lawn mower. He can mow his entire lawn in "turtle" mode in 'x1' hour, or 'x2' minutes in "rabbit" mode. Today, he experimented by mowing half in turtle mode and half in rabbit mode. How many minutes did it take him to mow the lawn?
    
    # To Calculate the time it takes to mow the lawn with half in turtle mode and half in rabbit mode, first convert the hours in 'x1' to minutes and divide it by 2, then add that to 'x2'/2

    turtle_mode_minutes = x1 * 60  # converting hours to minutes

    total_time = (turtle_mode_minutes / 2) + (x2 / 2)
    return total_time