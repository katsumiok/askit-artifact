# Recompilation count: 0
def mark_plants_a_beanstalk_below_6aaa29(x1: float, x2: float) -> int:
    # Mark plants a beanstalk below his second-story window, which is 'x1' feet off the ground. The beanstalk doubles its height every day. If the beanstalk starts out 'x2' feet tall, how many days will it take to be taller than Mark's window?
    days = 0
    while x2 <= x1:
        x2 *= 2
        days += 1
    return days