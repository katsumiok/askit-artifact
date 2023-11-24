# Recompilation count: 0
def garrett_is_popping_popcorn_for_b9db15(x1, x2, x3, x4, x5) -> int:
    # Garrett is popping popcorn for a snack.
    # As the pan of kernels heats up, the kernels start popping faster.
    popcorn_popped_x1_seconds = 20
    popcorn_popped_x2_seconds = 3 * popcorn_popped_x1_seconds
    # The kernels increase to four times the initial popping rate in the next thirty seconds,
    popcorn_popped_x3_seconds = 4 * popcorn_popped_x1_seconds
    # but in the final'x3'seconds, the popping slows down to half the rate as the past'x4'seconds.
    popcorn_popped_x4_seconds = popcorn_popped_x3_seconds / 2
    # After Garrett takes the pan off the heat, a quarter of the number of kernels that popped in the final'x5'seconds of cooking also pop from the residual heat. 
    popcorn_popped_x5_seconds = popcorn_popped_x4_seconds / 4
    
    # How many pieces of popcorn does Garrett have to eat?
    total_popcorn = popcorn_popped_x1_seconds + popcorn_popped_x2_seconds + popcorn_popped_x3_seconds + popcorn_popped_x4_seconds + popcorn_popped_x5_seconds
    return total_popcorn