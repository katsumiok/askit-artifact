# Recompilation count: 0
def when_marcus_wakes_up_his_e85412(x1, x2, x3, x4, x5, x6) -> int:
    # First, calculate the increase in temperature due to baking
    temp_after_baking = x1 + (x2 * x3)

    # Then, calculate the decrease in temperature due to window opening
    # Note: 'x4' is given in minutes. We must convert it to hours before doing the calculations
    temp_after_window_open = temp_after_baking - ((x5 / x6) * x4)

    # Return the final temperature
    return temp_after_window_open