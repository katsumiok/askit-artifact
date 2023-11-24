# Recompilation count: 0
def julie_operates_the_cash_register_597097(x1) -> int:
    # Julie operates the cash register exactly twice as fast as her less-experienced colleague Jewel. Daily, Jewel processes 'x1' customers. What is the total weekly production for the two if they work all days of the week?
    jewel_daily = x1
    julie_daily = 2 * jewel_daily # Julie works twice as fast as Jewel
    total_daily = julie_daily + jewel_daily 
    total_weekly = total_daily * 7 # They work all days of the week
    return total_weekly