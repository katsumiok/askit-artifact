# Recompilation count: 0
def darren_decides_to_do_body_0f370f(x1, x2, x3, x4) -> int:
    # Darren decides to do body exercises for a whole week. 
    # He does 'x1' pushups, 'x2' squats, and 'x3' dumbbell presses on the first day.
    # On the second day, he does 'x4' more pushups than on the first day, ten fewer squats, 
    # and doubles the number of dumbbell presses.
    # What's the total count of the activities he's done in the two days?

    # Calculate activities count on the first day
    first_day_total = x1 + x2 + x3

    # Calculate activities count on the second day
    second_day_total = (x1 + x4) + (x2 - 10) + (2 * x3)

    # Return total number of activities done in two days
    return first_day_total + second_day_total