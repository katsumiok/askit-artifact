# Recompilation count: 0
def tim_has_a_box_with_c8aabf(x1, x2, x3) -> int:
    # Tim has a box with'x1'blue shoe boxes and'x2'red shoe boxes. 
    # If he uses'x3'blue shoeboxes and 1/3 red of his shoeboxes to go fishing, 
    # how many red and blue shoe boxes are left in Tim's box?
    
    # Calculate remaining blue shoe boxes
    remaining_blue = x1 - x3
    
    # Calculate remaining red shoe boxes
    remaining_red = x2 - x2 / 3
    
    # Total remaining shoe boxes
    total_remaining = remaining_blue + remaining_red
    
    return total_remaining