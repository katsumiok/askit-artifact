# Recompilation count: 0
def nik_has_x1_crayons_he_9eddbf(x1, x2, x3, x4, x5) -> int:
    # Nik has 'x1' crayons. He wants to separate them into groups of 'x2' and put them into boxes.  
    # Each box weighs 'x3' ounces. Each crayon weighs 'x4' ounce. 
    # If he puts all of his crayons into boxes, what is the total weight, in pounds, 
    # of the crayons and the boxes, when there are 'x5' ounces to a pound?

    # first we need to calculate number of boxes
    num_boxes = x1 / x2
  
    # now, calculate the total weight of the boxes in ounces
    boxes_weight_in_ounces = num_boxes * x3
  
    # calculate the total weight of the crayons in ounces
    crayons_weight_in_ounces = x1 * x4
  
    # now, add the weight of the crayons and the boxes together to get the total weight in ounces
    total_weight_in_ounces = boxes_weight_in_ounces + crayons_weight_in_ounces
  
    # now, convert the weight from ounces to pounds
    total_weight_in_pounds = total_weight_in_ounces / x5
  
    return total_weight_in_pounds