# Recompilation count: 0
def jay_is_making_snowballs_to_d83bd8(x1, x2, x3, x4) -> int:
    # Jay is making snowballs to prepare for a snowball fight with his sister. He can build'x1'snowballs in an hour, 
    # but'x2' melt every'x3'minutes. 
    # How long will it take before he has'x4'snowballs?

    # number of snowballs made in a minute
    snowballs_per_min = x1 / 60
    
    # number of snowballs that melt every minute
    melt_per_min = x2 / x3

    # net number of snowballs made per minute
    net_snowballs_per_min = snowballs_per_min - melt_per_min

    # time taken to make 'x4' snowballs
    time_taken_min = x4 / net_snowballs_per_min

    # convert minutes to hours and round up because we can't have fractional hours
    time_taken_hours = round(time_taken_min / 60)

    return time_taken_hours