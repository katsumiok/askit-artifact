# Recompilation count: 3
def debra_is_monitoring_a_beehive_354bf0(x1, x2, x3, x4, x5, x6) -> int:
    
    # bees leaving in the first 'x2' hours
    first_leaving_bees = x1 

    # bees returning in the next 'x3' hours
    first_returning_bees = first_leaving_bees // 2
    
    # bees leaving in the next 'x4' hours
    second_leaving_bees = 2 * first_leaving_bees
    
    # all bees that left before, returning back in 'x5' hours
    returning_bees = (first_leaving_bees - first_returning_bees) + second_leaving_bees
    
    return returning_bees