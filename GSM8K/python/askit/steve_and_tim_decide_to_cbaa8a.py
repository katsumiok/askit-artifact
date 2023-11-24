# Recompilation count: 0
def steve_and_tim_decide_to_cbaa8a(x1, x2, x3, x4) -> int:
    # Convert miles to feet since speeds are in feet per minute
    x1 *= 5280
    x3 *= 5280

    # Calculate time it takes for each to reach home in minutes
    steve_time = x1 / x2
    tim_time = x3 / x4
    
    # The waiting time is the difference between times if Steve is faster, else 0,
    # because the one who gets home first doesn't wait.
    waiting_time = max(steve_time, tim_time) - min(steve_time, tim_time)

    return waiting_time