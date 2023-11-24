# Recompilation count: 0
def misha_picks_out_x1_blouses_b77fd5(x1) -> int:
    # Misha picks out'x1'blouses from the 30% off rack.  The regular price for each blouse is $20.  How much is the total cost of the discounted blouses?
    # Calculate the discounted price and multiply by the number of blouses
    discounted_price = 20 - (20 * 30 / 100)
    total_cost = x1 * discounted_price
    return total_cost