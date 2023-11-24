# Recompilation count: 0
def bill_is_trying_to_figure_5fe373(x1, x2, x3, x4) -> int:
    # total bottles Bill already has
    total_bottles = x1 * x2
    
    # bottles needed for guests
    needed_bottles = x3 * x4
    
    # additional bottles needed
    additional_bottles = needed_bottles - total_bottles
    
    # if additional bottles needed is negative, he doesn't need to buy more
    if additional_bottles < 0:
        return 0
    
    return additional_bottles