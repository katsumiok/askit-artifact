# Recompilation count: 0
def as_sally_walked_to_school_71b0be(x1, x2, x3, x4) -> int:
    # As Sally walked to school, she was holding the strings to'x1'red balloons,'x2'green balloons,
    # and'x3'yellow balloons. Suddenly, a gust of wind caused 40% of the red balloons to burst. The shockingly loud 
    # sound startled Sally, and she accidentally released half of the yellow balloons.  But as she neared the school
    # grounds, she found'x4'blue balloons caught in a tree, and she added 75% of them to her remaining clutch of
    # balloons, which she carried into the school.  What number of balloons did she finally carry into the school?
    
    red_left = x1 * 0.6  # red balloons left after 40% burst
    yellow_left = x3 / 2  # yellow balloons left after releasing half
    blue_added = x4 * 0.75  # 75% of the blue balloons found are added

    total_balloons = red_left + x2 + yellow_left + blue_added  # add all the balloons

    return round(total_balloons)  # rounding off the total balloons as we can't have a fraction of a balloon