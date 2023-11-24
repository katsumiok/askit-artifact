# Recompilation count: 0
def henry_needs_to_assemble_some_9beb52(x1, x2, x3, x4, x5) -> int:
    # Henry needs to assemble some toys, specifically 'x1' cars and 'x2' motorcycles. 
    # Henry knows that to assemble all the toys he will need 'x3' wheels for each car 
    # and 'x4' wheels for each motorcycle. How many wheels will be left if he has a box with 'x5' wheels in it?

    total_wheels_needed = x1*x3 + x2*x4
    wheels_left = x5 - total_wheels_needed

    return wheels_left