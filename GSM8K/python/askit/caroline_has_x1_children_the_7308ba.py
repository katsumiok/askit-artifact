# Recompilation count: 0
def caroline_has_x1_children_the_7308ba(x1, x2, x3) -> int:
    # Caroline has'x1'children.  The first child is'x2'feet tall.  The second child is two inches taller than the first child.  
    # The third child is'x3'inches shorter than the second child.  And the fourth child is three inches taller than the third child.  
    # How tall is the fourth child, in inches?

    # Convert the first child's height to inches
    first_child_height_inches = x2 * 12
  
    # Calculate the height of the second child
    second_child_height_inches = first_child_height_inches + 2
  
    # The third child's height
    third_child_height_inches = second_child_height_inches - x3
  
    # The fourth child's height
    fourth_child_height_inches = third_child_height_inches + 3
  
    return fourth_child_height_inches