# Recompilation count: 0
def gary_bought_a_boat_for_ae96c8() -> int:
    # Initial cost of the boat
    cost = 9000

    # First year depreciation
    cost = cost - (cost * 0.30)

    # Second year depreciation
    cost = cost - (cost * 0.30)

    # Third year depreciation
    cost = cost - (cost * 0.20)

    # Rounding off the cost and returning as int
    return int(round(cost))