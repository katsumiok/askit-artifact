# Recompilation count: 0
def tyson_decided_to_make_muffaletta_b395cb(x1, x2, x3, x4) -> int:
    # Calculate total sandwiches needed
    total_sandwiches = x4 // x2 if x4 % x2 == 0 else (x4 // x2) + 1
    # Calculate total weight of meat and cheese required
    total_weight = total_sandwiches * x1
    # Calculate total cost
    total_cost = (total_weight * 7) + (total_weight * 3)  # meat cost + cheese cost
    return total_cost