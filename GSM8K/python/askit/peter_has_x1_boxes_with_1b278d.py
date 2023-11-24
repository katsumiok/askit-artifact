# Recompilation count: 0
def peter_has_x1_boxes_with_1b278d(x1, x2, x3, x4) -> int:
    # Calculate chocolate bars per box for each person
    peter_chocolate_per_box = x3 / x1
    martha_chocolate_per_box = x4 / x2
    # Return how many more bars Peter has in each box than Martha
    return peter_chocolate_per_box - martha_chocolate_per_box