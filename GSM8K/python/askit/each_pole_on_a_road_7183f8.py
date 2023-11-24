# Recompilation count: 0
def each_pole_on_a_road_7183f8(x1, x2, x3) -> int:
    # Each pole on a road intersection has'x1'street lights. 
    # If the number of poles at each intersection is 6, and the road has'x2'intersections, 
    # calculate the total number of functioning street lights if'x3'streetlights from the total number are not working.
    total_street_lights = x1 * 6 * x2
    functioning_street_lights = total_street_lights - x3
    return functioning_street_lights