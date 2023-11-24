# Recompilation count: 0
def to_kick_off_summer_jolene_65743e(x1, x2, x3) -> int:
    # To kick off summer, Jolene is having a water balloon fight with her friends.  They fill up'x1'packs of balloons that have'x2'balloons per pack.  By the end of the afternoon,'x3'balloons are left.  How many balloons did they throw?
    total_balloons = x1 * x2
    balloons_thrown = total_balloons - x3
    return balloons_thrown