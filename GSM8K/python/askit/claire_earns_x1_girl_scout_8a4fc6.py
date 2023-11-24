# Recompilation count: 0
def claire_earns_x1_girl_scout_8a4fc6(x1, x2) -> int:
    # Claire earns'x1'girl scout badges every month.
    # It takes Amber twice as long to earn a badge than Claire (so Amber earns half as many as Claire per month).
    # Wendy earns three times the amount of badges as Claire in the same timeframe.
    # Calculate badges earned by Claire, Amber and Wendy in a'x2' year time frame (12 months in a year).

    claire_yearly = x1 * 12 * x2
    amber_yearly= claire_yearly / 2
    wendy_yearly = claire_yearly * 3

    # How many more badges does Wendy earn compared to Amber?
    difference = wendy_yearly - amber_yearly

    return int(difference)