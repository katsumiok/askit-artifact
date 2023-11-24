# Recompilation count: 0
def marissa_is_hiking_a_12_ee89c7(x1, x2, x3) -> int:
    # First, calculate the total time Marissa wants to spend walking
    total_time = 12 / x3

    # Subtract the time she already spent
    remaining_time = total_time - (x1 + 1)

    # Calculate the remaining distance she needs to walk
    remaining_distance = 12 - (x2 + 2)

    # Calculate the speed she needs to walk to complete the remaining distance in the remaining time
    speed_needed = remaining_distance / remaining_time

    return speed_needed