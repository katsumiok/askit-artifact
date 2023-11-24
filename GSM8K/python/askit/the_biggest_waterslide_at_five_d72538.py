# Recompilation count: 0
def the_biggest_waterslide_at_five_d72538(x1, x2, x3, x4) -> int:
    # The biggest waterslide at Five Flags is'x1'feet long, and people slide down at'x2'feet/minute.
    # The second biggest waterslide is'x3'feet long, but steeper, so people slide down at'x4'feet/minute.
    # How much longer does it take to ride the biggest slide compared to the second biggest slide?
    
    time_biggest_slide = x1 / x2
    time_second_biggest_slide = x3 / x4
    extra_time = time_biggest_slide - time_second_biggest_slide
    return extra_time