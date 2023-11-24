# Recompilation count: 1
def helga_was_the_fastest_clog_5507ff(x1, x2, x3, x4, x5) -> int:
    # calculate total tapping of feet when arms are lowered
    arms_down_taps = (x1 + x2) * (x4 - x5)
    # calculate total tapping of feet when arms are raised
    arms_raised_taps = (x3 * 2) * x5
    # return the combined total taps
    return arms_down_taps + arms_raised_taps