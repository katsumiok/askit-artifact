# Recompilation count: 0
def each_sleeve_of_graham_crackers_e348e4(x1, x2, x3, x4, x5, x6) -> int:
    # Each sleeve of graham crackers makes the base for 'x1' large smores.  There are 'x2' sleeves in a box.
    # If 'x3' kids want 'x4' smores apiece and 'x5' adults will eat 'x6' smore apiece, how many boxes of graham crackers will they need?
    
    total_smores = (x3 * x4) + (x5 * x6) # total smores needed 
    smores_per_box = x1 * x2 # number of smores that can be made from each box
    
    total_boxes = total_smores // smores_per_box # find out how many whole boxes are needed

    # Check if there is a remainder.  If there is, then we'll need to buy another box, because you can't buy a fraction of a box.
    if total_smores % smores_per_box > 0:
        total_boxes += 1

    return total_boxes