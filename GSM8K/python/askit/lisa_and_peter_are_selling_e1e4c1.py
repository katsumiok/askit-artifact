# Recompilation count: 0
def lisa_and_peter_are_selling_e1e4c1(x1) -> int:
    # Lisa and Peter are selling chocolate bars door to door. 
    # Lisa sold three and a half boxes, and Peter sold four and a half boxes. 
    # They sold 'x1' chocolate bars together.
    # Therefore, the number of chocolate bars in one box would be the total number of chocolates sold divided by the total number of boxes they sold.
    number_of_boxes = 3.5 + 4.5
    number_of_chocolates_in_one_box = x1 / number_of_boxes
    return int(number_of_chocolates_in_one_box)