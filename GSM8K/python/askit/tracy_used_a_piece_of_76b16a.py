# Recompilation count: 0
def tracy_used_a_piece_of_76b16a(x1, x2) -> int:
    # Tracy used a piece of wire'x1'feet long to support tomato plants in the garden. The wire was cut into pieces'x2'inches long. How many pieces did she obtain?
    total_inches = x1 * 12 # convert feet to inch
    return total_inches // x2 # get how many pieces she got