# Recompilation count: 0
def the_cheese_pizza_is_cut_624c4a(x1, x2, x3, x4, x5) -> int:
    # The cheese pizza is cut into'x1'slices and the pepperoni pizza is cut into'x2'slices.  
    # If Kate’s'x3'friends each eat'x4'cheese pizza slices and'x5'pepperoni pizza slices, how many pizza pies does she need to buy?
   
    # Calculate total slices of cheese pizza and pepperoni pizza consumed
    total_cheese_slices = x3 * x4
    total_pepperoni_slices = x3 * x5

    # Calculate total pizza pies for cheese and pepperoni
    total_cheese_pies = -(-total_cheese_slices // x1)    # Use negative division for ceil value
    total_pepperoni_pies = -(-total_pepperoni_slices // x2)  # Use negative division for ceil value

    # Sum of total cheese and pepperoni pizzas
    total_pizza_pies = total_cheese_pies + total_pepperoni_pies

    return total_pizza_pies