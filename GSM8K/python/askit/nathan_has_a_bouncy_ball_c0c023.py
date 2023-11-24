# Recompilation count: 0
def nathan_has_a_bouncy_ball_c0c023(x1: int) -> int:
    # Nathan has a bouncy ball that bounces to 2/3rds of its starting height with each bounce. 
    # If he drops it from the third-floor balcony in the mall, where each story is 'x1' feet high, how high does the ball go on its second bounce?

    # One story is 'x1' feet high. So, the third floor is 3 * 'x1' feet high.
    first_bounce_height = (2 / 3) * (3 * x1)

    # After the second bounce, the ball reaches 2/3rds of the height it achieved in the first bounce.
    second_bounce_height = (2 / 3) * first_bounce_height

    return second_bounce_height