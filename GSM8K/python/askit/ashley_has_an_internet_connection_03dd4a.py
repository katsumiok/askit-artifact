# Recompilation count: 0
def ashley_has_an_internet_connection_03dd4a(x1, x2) -> int:
    # Ashley has an internet connection speed of 20kb per second. Knowing that'x1'Mb has'x2'kb, she wants to know her internet connection speed in Mb per hour. What is Ashley’s internet connection speed in Mb per hour?
    
    # First, convert the speed from kb/s to mb/s
    speed_in_mb_per_second = 20 / x2
    
    # Then, convert the speed to mb/hour. As there are 3600 seconds in 1 hour, multiply by this factor
    speed_in_mb_per_hour = speed_in_mb_per_second * 3600

    return int(speed_in_mb_per_hour)