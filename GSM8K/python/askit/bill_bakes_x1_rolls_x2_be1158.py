# Recompilation count: 0
def bill_bakes_x1_rolls_x2_be1158(x1, x2, x3, x4, x5) -> int:
    # Bill bakes'x1'rolls,'x2'chocolate croissants, and'x3'baguettes every day. Each roll is'x4'inches long, each croissant is'x5'inches long, and each baguette is two feet long. If Bill puts all the baked goods end to end, how long will they be in feet?
    
    total_inches = (x1 * x4) + (x2 * x5) 
    total_feet = (total_inches / 12) + (x3 * 2 )  # convert inches to feet and add the length of baguettes

    return total_feet