# Recompilation count: 0
def aaron_and_vanessa_were_relay_bebe44(x1, x2) -> int:
    # Firstly, we know that Vanessa ran twice the distance that Aaron ran, so Aaron ran x1/2 miles.
    # Secondly, we know that Aaron's speed is twice that of Vanessa's. So if Aaron took x2 minutes to run x1/2 miles,
    # Vanessa would take 2*x2 minutes to run the same distance.
    # But Vanessa ran twice as far, so she would take 2 * 2 * x2 = 4 * x2 minutes to cover x1 miles.
    return 4 * x2