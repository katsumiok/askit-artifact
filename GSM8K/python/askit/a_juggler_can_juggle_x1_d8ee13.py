# Recompilation count: 0
def a_juggler_can_juggle_x1_d8ee13(x1) -> int:
    # A juggler can juggle 'x1' balls. Half of the balls are golf balls, and half of the golf balls are blue. How many blue golf balls are there?
    golf_balls = x1 / 2
    blue_golf_balls = golf_balls / 2
    return int(blue_golf_balls)