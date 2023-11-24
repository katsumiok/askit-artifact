# Recompilation count: 0
def a_wooden_bridge_can_carry_01e747(x1, x2, x3) -> int:
    # A wooden bridge can carry no more than'x1'pounds. A delivery truck filled 
    # with identical boxes, each weighing'x2'pounds, will pass over the bridge. 
    # The combined weight of the driver and the empty truck is'x3'pounds. 
    # What is the maximum number of boxes which can be loaded onto the truck while not 
    # exceeding the bridge's weight limit?
   
    # Calculate the remaining weight that the bridge can carry after considering the weight of the truck and driver
    remaining_weight = x1 - x3

    # Calculate the maximum number of boxes that the bridge can carry
    max_boxes = remaining_weight // x2

    return max_boxes