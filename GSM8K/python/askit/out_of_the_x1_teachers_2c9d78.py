# Recompilation count: 0
def out_of_the_x1_teachers_2c9d78(x1, x2) -> int:
    # Out of the'x1'teachers on the school basketball court, 60% are history teachers. 
    # If the rest of the teachers on the court are math teachers, and each teacher sleeps for'x2'hours a day, 
    # calculate the total time the math teachers collectively spend sleeping in one day.
    # Calculate number of math teachers
    math_teachers = x1 * 0.40 
    total_sleep_time = math_teachers * x2
    return int(total_sleep_time)