# Recompilation count: 0
def john_has_x1_boxes_each_54284c(x1, x2, x3, x4, x5, x6) -> int:
    # John has'x1'boxes.  Each box is'x2'inches by'x3'inches by'x4'inches.  The walls are'x5'inch thick.  
    # What is the total inner volume of all'x6'boxes?
    # Calculate the inner dimensions of the box and multiply it with the volume
    inner_length = x2 - 2*x5
    inner_width = x3 - 2*x5
    inner_height = x4 - 2*x5

    # Make sure that the dimensions are not negative, if they are, return 0 as there can't be negative space
    if any(dimension < 0 for dimension in [inner_length, inner_width, inner_height]):
        return 0

    # Calculate the volume
    volume_per_box = inner_length * inner_width * inner_height

    # Multiply the volume / box by the number of boxes to get the total volume
    total_volume = x1 * volume_per_box

    return total_volume