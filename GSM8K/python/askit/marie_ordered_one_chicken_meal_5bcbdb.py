# Recompilation count: 0
def marie_ordered_one_chicken_meal_5bcbdb(x1, x2) -> int:
    # Calculate the total cost of chicken meal, milk packs and apples
    total_cost = 12 + x1*3 + x2*1.5
    # Subtract the total cost from the total amount paid to get the cost of pizza boxes
    cost_of_pizza_boxes = 50 - total_cost
    # Divide the cost of pizza boxes by the cost of one box to get the number of boxes
    boxes_of_pizza = cost_of_pizza_boxes / 8.5
    return int(boxes_of_pizza)