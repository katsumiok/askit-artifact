# Recompilation count: 1
def tommy_caught_x1_more_fish_8cc0c0(x1, x2, x3) -> int:
    # Tommy caught'x1'more fish than Darren and Darren caught'x2'less than Naomi. If Naomi caught'x3'fish, how many fish did Tommy catch?
    # First, we find out how many fish Darren caught,
    # Which is x3 (fish Naomi caught) - x2 (fish less Darren caught than Naomi)
    darren_caught = x3 - x2
    # Then, Tommy caught x1 more fish than Darren
    # So, Tommy caught is darren_caught + x1
    tommy_caught = darren_caught + x1
    return tommy_caught