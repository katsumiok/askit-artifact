# Recompilation count: 0
def it_rained_x1_inches_on_298229(x1, x2) -> int:
    # It rained'x1'inches on Monday and is expected to rain'x2'more inch than twice of Monday’s total on Tuesday. How many inches of rain will there be on Tuesday?
    tuesday_rain = 2 * x1 + x2
    return tuesday_rain