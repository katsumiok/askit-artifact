# Recompilation count: 0
def four_friends_ordered_four_pizzas_b231bb(x1, x2) -> int:
    # Four friends ordered four pizzas for a total of'x1'dollars. If two of the pizzas cost'x2'dollars, how much did each of the other two pizzas cost if they cost the same amount?
    cost_of_other_two_pizzas = x1 - x2 # Find the total cost of the other two pizzas
    cost_per_pizza = cost_of_other_two_pizzas // 2 # Find the cost per pizza
    
    return cost_per_pizza