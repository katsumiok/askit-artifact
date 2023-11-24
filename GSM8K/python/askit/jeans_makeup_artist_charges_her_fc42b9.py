# Recompilation count: 0
def jeans_makeup_artist_charges_her_fc42b9(x1, x2, x3) -> int:
    # Calculate the total charges before discount
    total_charges = 250 * x1 * x2 * x3
    # Calculate the amount of discount
    discount = total_charges * 0.1
    # Subtract the discount from the total charges to get the amount Jean paid
    amount_paid = total_charges - discount
    return amount_paid