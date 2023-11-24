# Recompilation count: 0
def the_rug_is_x1_feet_3997de(x1, x2, x3) -> int:
    # The rug is'x1'feet wider than the chair. The couch is'x2'feet longer than twice the width of the rug. If the chair is'x3'feet wide. How many feet long is the couch?
    rug_width = x1 + x3
    couch_length = x2 + 2*rug_width
    return couch_length