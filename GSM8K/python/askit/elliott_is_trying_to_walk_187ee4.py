# Recompilation count: 0
def elliott_is_trying_to_walk_187ee4() -> int:
    # Half the daily goal is already done which is 5000 steps
    # Then he did 1000 more steps with his friend
    # After jog, he only had 2000 steps left which means he did 10000 (total steps) - 2000 (steps left after jog) = 8000 steps till now
    # So, steps taken during jog is 8000 (steps done till now) - 5000 (initial half steps) - 1000 (steps with friend)
    return 8000 - 5000 - 1000