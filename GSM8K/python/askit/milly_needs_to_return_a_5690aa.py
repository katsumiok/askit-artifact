# Recompilation count: 0
def milly_needs_to_return_a_5690aa(x1, x2) -> float:
    # calculate the shipping cost
    shipping_cost = x1 * 0.35 + x2 * 0.08 

    # amazon refund amount
    refund_amount = 32 * 0.75
    
    # money Milly will lose
    money_lost = shipping_cost + (32 - refund_amount)
    
    return money_lost