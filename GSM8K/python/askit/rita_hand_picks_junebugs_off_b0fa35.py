# Recompilation count: 0
def rita_hand_picks_junebugs_off_b0fa35(x1, x2) -> int:
    # Rita hand-picks Junebugs off of her plants every summer.  
    # On Monday, she removed 'x1' Junebugs.  
    # On both Tuesday and Wednesday, she removed twice as many Junebugs as she did on Monday.  
    # Thursday she removed 'x2' and on Friday she removed 57.  
    # What is the average number of Junebugs that she removes per day?

    total_junebugs = x1 + (2 * x1) * 2 + x2 + 57
    average_junebugs_per_day = total_junebugs / 5

    return round(average_junebugs_per_day)