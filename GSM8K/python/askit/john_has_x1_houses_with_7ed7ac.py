# Recompilation count: 0
def john_has_x1_houses_with_7ed7ac(x1, x2, x3, x4) -> int:
    # John has 'x1' houses with 'x2' bedrooms each. Each bedroom has 'x3' windows each. 
    # There are an additional 'x4' windows in each house not connected to bedrooms. 
    # How many total windows are there between the houses?
    return x1 * ((x2 * x3) + x4)