# Recompilation count: 0
import math

def bob_thinks_he_needs_x1_17a54d(x1, x2) -> int:
    # Bob thinks he needs'x1'popsicle sticks to recreate the Washington Monument for his history project.  
    # His favorite popsicles come'x2'to a box and cost $2.00 per box.  How much will it cost Bob to build his project?
    # First, we need to determine the number of boxes Bob will need. Since he can't buy partial boxes, we'll round up using the math.ceil function.
    # Then, we multiply the number of boxes by the cost per box to find the total cost.
    boxes_needed = math.ceil(x1 / x2)
    total_cost = boxes_needed * 2
    return total_cost