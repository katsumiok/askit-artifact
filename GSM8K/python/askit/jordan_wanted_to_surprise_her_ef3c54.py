# Recompilation count: 6
def jordan_wanted_to_surprise_her_ef3c54(x1, x2, x3, x4) -> int:
    # First convert cooling hours to minutes
    cooling_time = x3 * 60
    # Total time to make the cake is the sum of all the times
    total_time = x1 + x2 + cooling_time + x4
    # The latest time to start is 5pm minus the total time calculated,
    # converted back to hours (rounded down to whole number as we are returning an int)
    latest_start_time = (5 * 60 - total_time) // 60
    return latest_start_time