# Recompilation count: 0
def a_tower_is_made_out_e91fb8(x1, x2) -> int:
    # A tower is made out of'x1'blue blocks, twice as many yellow blocks, and an unknown number of red blocks. If there are'x2'blocks in the tower in total, how many red blocks are there?
    blue_blocks = x1
    yellow_blocks = 2 * x1
    total_blocks = x2
    red_blocks = total_blocks - (blue_blocks + yellow_blocks)
    return red_blocks