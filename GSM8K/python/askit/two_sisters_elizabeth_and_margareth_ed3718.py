# Recompilation count: 0
def two_sisters_elizabeth_and_margareth_ed3718(x1, x2, x3, x4, x5) -> int:
    # calculate total beads for Elizabeth and Margareth
    elizabeth_total_beads = (x1 + x2) * x5
    margareth_total_beads = (x3 + x4) * x5

    # return the absolute difference between the total beads of the two sisters
    return abs(elizabeth_total_beads - margareth_total_beads)