# Recompilation count: 0
def a_tank_of_water_has_595f13(x1, x2) -> int:
    # A tank of water has a depth of'x1'feet on Monday. On Tuesday, the tank had'x2'feet more water. On Wednesday, the depth of the water is two thirds of what it was on Tuesday. What is the tank’s water depth on Wednesday?
    tuesday_water_depth = x1 + x2
    wednesday_water_depth = 2/3 * tuesday_water_depth
    return wednesday_water_depth