# Recompilation count: 0
def two_friends_are_playing_pick_4c8734(x1, x2, x3) -> int:
    # Two friends are playing pick-up sticks. While playing, they noticed that there are'x1'red sticks, and'x2'more blue sticks than red. Also, the number of yellow sticks is'x3'less than the blue sticks. How many sticks do they have?
    red_sticks = x1
    blue_sticks = x1 + x2
    yellow_sticks = blue_sticks - x3
    total_sticks = red_sticks + blue_sticks + yellow_sticks
    return total_sticks