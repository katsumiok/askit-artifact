# Recompilation count: 0
def i_have_x1_liters_of_da7f35(x1, x2, x3) -> int:
    # I have'x1'liters of orange drink that are two-thirds water and I wish to add it to'x2'liters of pineapple drink that is three-fifths water. 
    # But as I pour it, I spill one liter of the orange drink. How much water is in the remaining'x3'liters?

    # subtract one liter spilled from orange drink
    x1 = x1 - 1 if x1 > 0 else 0

    # find the volume of water in both drinks
    orange_drink_water = (2/3) * x1
    pineapple_drink_water = (3/5) * x2

    # find the total volume of water
    total_water = orange_drink_water + pineapple_drink_water

    # if 'x3' remaining liters is more than the total volume, return total water
    # else return the proportion of water in 'x3' liters
    return total_water if x3 >= (x1 + x2) else x3 * (total_water / (x1 + x2))