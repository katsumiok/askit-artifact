# Recompilation count: 0
def a_bus_travels_x1_miles_9f69df(x1, x2, x3, x4) -> int:
    # A bus travels 'x1' miles per hour for 'x2' hours.
    # A car travels 'x3' miles per hour for 'x4' hours.
    # Return difference between total distance travelled by the bus and the car, in miles.

    total_bus_distance = x1 * x2
    total_car_distance = x3 * x4

    difference = total_bus_distance - total_car_distance

    return difference