# Recompilation count: 0
def charlotte_went_into_the_kitchen_740c56(x1) -> int:
    # calculating the total without discount
    total_without_discount = 120 + 20 + (x1 * 5)
  
    # calculating the discount
    discount = total_without_discount * 0.2 
  
    # calculating the total order after discount
    total_order = total_without_discount - discount

    return round(total_order)