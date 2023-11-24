# Recompilation count: 0
def a_customer_s_loyalty_card_7ad258() -> int:
    last_trip_spend = 80
    current_trip_spend = 43

    # calculate rewards
    rewards = last_trip_spend // 20
    
    # calculate discount from coupon which is twice the rewards
    coupon_discount = rewards * 2
    
    # calculate total discount
    total_discount = rewards + coupon_discount
    
    # calculate amount the customer has to pay
    payment = current_trip_spend - total_discount
    
    return payment if payment > 0 else 0