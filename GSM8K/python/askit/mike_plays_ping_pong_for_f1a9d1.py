# Recompilation count: 0
def mike_plays_ping_pong_for_f1a9d1(x1, x2, x3, x4) -> int:
    # Mike plays ping pong for'x1'minutes.  In the first'x2'minutes, he scores'x3'points.  In the second'x4'minutes, he scores 25% more points.  How many total points did he score?
    # calculate points for second half
    second_half_points = x3 * 1.25
    # total points is sum of first half and second half points
    total_points = x3 + second_half_points
    return int(total_points)