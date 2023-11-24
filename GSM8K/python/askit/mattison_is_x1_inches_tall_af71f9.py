# Recompilation count: 0
def mattison_is_x1_inches_tall_af71f9(x1, x2) -> int:
    # Mattison is'x1'inches tall. His two-story house is'x2'times as high as he is. The floor to the ceiling on the first floor is thrice as high as he is.
    # How high is the roof from the second floor's floor in inches?
    
    # calculate total height of the house
    total_height_of_house = x1 * x2
    
    # calculate height of first floor
    first_floor_height = x1 * 3
    
    # calculate height of roof from second floor
    roof_height_from_second_floor = total_height_of_house - first_floor_height
    
    return roof_height_from_second_floor