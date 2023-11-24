# Recompilation count: 0
def john_collects_peaches_for_x1_f587be(x1, x2) -> int:
    # John collects peaches for'x1'hours.  He can collect'x2'peaches a minute.  How many peaches does he collect?
    # 1 hour has 60 minutes
    total_minutes = x1 * 60
    # calculate the total peaches collected
    total_peaches = total_minutes * x2
    return total_peaches