# Recompilation count: 0
def the_area_of_billie_s_fecb39(x1, x2) -> int:
    # The area of Billie's rectangular bedroom is'x1'square feet. If the length of his room is'x2'yards, what is the perimeter of the room in feet?
    # First convert the length from yards to feet (1 yard = 3 feet)
    length_feet = x2 * 3 
    # Since Area = length x width, we can find the width
    width_feet = x1 / length_feet
    # The perimeter of the room would be 2(length + width)
    perimeter_feet = 2 * (length_feet + width_feet)
    return perimeter_feet