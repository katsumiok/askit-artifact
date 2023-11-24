# Recompilation count: 0
def the_restaurant_has_x1_normal_3d3620(x1, x2, x3, x4) -> int:
    # The restaurant has'x1'normal chairs and'x2'chairs for babies. If'x3'of the normal chairs and'x4'of the baby chairs were sent to the carpenter for repair, how many chairs does the restaurant have left?
    return (x1 - x3) + (x2 - x4)