# Recompilation count: 0
def marcus_ordered_x1_croissants_at_485773(x1, x2, x3, x4) -> int:
    # Define the prices of each item
    croissant_price = 3
    cinnamon_roll_price = 2.50
    mini_quiche_price = 4
    blueberry_muffin_price = 1
    
    # Calculate the total cost using the quantities of each item
    total_cost = (x1 * croissant_price) + (x2 * cinnamon_roll_price) + (x3 * mini_quiche_price) + (x4 * blueberry_muffin_price)
    
    # Calculate the total cost after the 10% discount
    total_cost_with_discount = total_cost * 0.90
    
    return total_cost_with_discount