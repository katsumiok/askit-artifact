# Recompilation count: 0
def a_shop_sells_school_supplies_04b46c() -> int:
    # calculate price of items
    notebook_price = 1.50 * 5
    pen_price = 0.25 * 2
    calculator_price = 12 * 1
    geometry_set_price = 10 * 1
    
    # total cost before discount
    total_cost = notebook_price + pen_price + calculator_price + geometry_set_price
    
    # applying 10% discount
    discounted_cost = total_cost - (total_cost * 0.10)
    
    # rounding off the price to nearest integer
    final_cost = round(discounted_cost)

    return final_cost