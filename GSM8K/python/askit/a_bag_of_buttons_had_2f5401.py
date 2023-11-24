# Recompilation count: 0
def a_bag_of_buttons_had_2f5401(x1) -> int:
    # A bag of buttons had 'x1' buttons in it. Seven buttons had two holes and the rest (x1-7) had four holes. 
    # The total number of holes is calculated by adding the holes in the seven two-hole buttons and the rest of the four-hole buttons.
    total_holes = 7 * 2 + (x1 - 7) * 4
    return total_holes