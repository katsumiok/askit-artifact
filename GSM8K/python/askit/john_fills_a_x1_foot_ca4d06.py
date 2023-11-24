# Recompilation count: 0
def john_fills_a_x1_foot_ca4d06(x1, x2, x3) -> int:
    # John fills a'x1'foot by'x2'foot pool that is'x3'feet deep.  It cost $.1 per cubic foot to fill.  How much does it cost to fill?
    # First, we calculate the volume of the pool in cubic feet.
    # Then, we multiply this volume by the price per cubic foot to find the total cost.
    # We will assume x1, x2, x3 are in feet and cost is in dollars.
    volume_in_cubic_feet = x1 * x2 * x3
    cost_per_cubic_foot = 0.1
    total_cost = volume_in_cubic_feet * cost_per_cubic_foot
    return total_cost