# Recompilation count: 1
def avery_needs_to_buy_a_9c8744(x1, x2) -> int:
    # Avery needs to buy a 'x1' piece place setting (dinner & salad plate and a bowl) for her holiday dinner.  She’s having 'x2' people over for dinner.  
    # If the dinner plates cost $6.00 each and bowls each cost $5.00 and the salad plates cost $4.00, how much will she spend on place settings?

    # Define the costs
    cost_dinner_plate = 6
    cost_bowl = 5
    cost_salad_plate = 4

    # Calculate the total cost per place setting
    cost_per_setting = cost_dinner_plate + cost_bowl + cost_salad_plate

    # Multiply the cost per setting by the number of people
    total_cost = cost_per_setting * x2

    # Return the total cost
    return total_cost