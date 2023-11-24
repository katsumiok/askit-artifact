# Recompilation count: 0
def if_chester_eats_x1_eggs_3179f1(x1, x2, x3, x4, x5) -> int:
    # If Chester eats'x1'eggs a day for'x2'days and then increases it to'x3'eggs a day for'x4'days, how many dozens of eggs will Chester need for'x5'days?
    total_eggs = (x1 * x2) + (x3 * x4)
    
    # If total days is more than the sum of x2 and x4 days
    if x5 > (x2 + x4):
        # add to total the eggs Chester will eat in the remaining days with the rate of x3 eggs a day
        total_eggs += x3 * (x5 - (x2 + x4))
        
    dozens = total_eggs // 12  # Convert eggs to dozens
    if total_eggs % 12 != 0:  # If there are remaining eggs after conversion, Chester will still need additional dozen
        dozens += 1
    
    return dozens