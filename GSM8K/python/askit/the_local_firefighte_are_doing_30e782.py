# Recompilation count: 0
def the_local_firefighte_are_doing_30e782(x1) -> int:
    # The local firefighters are doing a “fill the boot” fundraiser. Their goal is to raise $6300. After the first 'x1' hours, they have raised $2100.  
    # For how many hours do they have to fundraise in total to reach their goal, assuming an equal amount raised in every hour?

    total_goal = 6300
    initial_raise = 2100
    remaining_goal = total_goal - initial_raise

    # Calculate amount raised per hour
    raise_per_hour = initial_raise / x1

    # Calculate remaining hours required to reach the goal
    remaining_hours = remaining_goal / raise_per_hour

    return remaining_hours + x1