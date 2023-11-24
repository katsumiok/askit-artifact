# Recompilation count: 0
def ray_had_x1_lollipops_he_dcffb2(x1, x2) -> int:
    # Ray had'x1'lollipops. He kept'x2'lollipops and shared the remaining equally with his four friends. 
    # How many lollipops did each of his friends receive?
    remaining_lollipops = x1 - x2
    lollipops_per_friend = remaining_lollipops // 4
    return lollipops_per_friend