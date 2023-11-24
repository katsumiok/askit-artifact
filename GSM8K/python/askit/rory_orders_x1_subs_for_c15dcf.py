# Recompilation count: 0
def rory_orders_x1_subs_for_c15dcf(x1, x2, x3) -> int:
    # Calculation of the total cost
    subs_cost = x1 * 7.50
    chips_cost = x2 * 1.50
    cookies_cost = x3 * 1.00
    total_cost_without_delivery = subs_cost + chips_cost + cookies_cost
    delivery_fee = total_cost_without_delivery * 0.20
    total_cost_with_delivery = total_cost_without_delivery + delivery_fee
    total_cost_with_tip = total_cost_with_delivery + 5.00

    return round(total_cost_with_tip)