# Recompilation count: 0
def on_thursday_joe_caught_x1_d6b7b1(x1, x2, x3, x4) -> int:
    # On Thursday, Joe caught 'x1' pounds of crawfish.  He caught 'x2' times that amount on Friday and half the amount of his Friday's catch on Saturday.  
    # If 'x3' serving of crawfish is 'x4' pounds, how many servings does he have?
    thursday_catch = x1
    friday_catch = x1 * x2
    saturday_catch = friday_catch / 2
    total_catch = thursday_catch + friday_catch + saturday_catch
    servings = total_catch // x4
    return int(servings)