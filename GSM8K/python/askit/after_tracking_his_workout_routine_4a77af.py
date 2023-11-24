# Recompilation count: 4
def after_tracking_his_workout_routine_4a77af(x1, x2, x3, x4, x5) -> int:
    # After tracking his workout routine for 'x1' weeks, Josh discovered that 
    # he had spent 'x2' hours working out every week except some occasions. 
    # At one point, he spent 'x3' hours each for two consecutive weeks. 
    # Another time, he spent 'x4' hours in one week.
    # What is the total number of hours he has spent working out across the 'x5' weeks?

    # First, let's calculate the total hours he spent regularly.
    regular_hours = x2 * x1

    # He spent 'x3' hours for two consecutive weeks.
    extra_hours_2_weeks = x3 * 2

    # He spent 'x4' hours in one week.
    extra_hours_1_week = x4

    # Subtract the extra hours from the total regular hours
    # because those were not regular weeks.
    total_hours = regular_hours - (x2 * 3) + extra_hours_2_weeks + extra_hours_1_week

    # Now we return the total number of hours Josh worked out in 'x5' weeks
    return total_hours