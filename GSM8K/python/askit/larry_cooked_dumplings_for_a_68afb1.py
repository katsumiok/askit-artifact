# Recompilation count: 0
def larry_cooked_dumplings_for_a_68afb1(x1, x2, x3, x4) -> int:
    # Larry cooked dumplings for a group of friends.  There are 'x1' males, 
    # including Larry, and 'x2' females among them. Each male ate 'x3' more 
    # dumpling than each female. How many dumplings did Larry cook if each 
    # female ate 'x4' dumplings and there were no leftovers?
    total_dumplings = x1 * (x3 + x4) + x2 * x4
    return total_dumplings