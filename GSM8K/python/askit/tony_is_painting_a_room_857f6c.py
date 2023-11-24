# Recompilation count: 0
def tony_is_painting_a_room_857f6c(x1, x2, x3, x4, x5) -> int:
    # Tony is painting a room with four walls.
    # The north and south walls are 'x1' x 'x2' feet.
    # The east and west walls are 'x3' x 'x4' feet.
    # A gallon of paint can cover 'x5' square feet and cost $12.
    # How much will it cost to paint the room?

    # To calculate the cost of painting the room, we need to find the total area of the walls and then divide it by
    # the area that can be covered by a single gallon of paint, which gives us total gallons of paint needed.
    # Then, multiply it with the cost of a gallon of paint to get the total cost.

    # calculate total area of the walls
    total_area = 2 * (x1 * x2 + x3 * x4)
    
    # calculate total paint needed
    total_paint = total_area / x5

    # calculate total cost needed
    total_cost = total_paint * 12

    return total_cost