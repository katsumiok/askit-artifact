# Recompilation count: 0
def john_is_very_tired_he_dddc5e(x1, x2, x3, x4) -> int:
    # minutes of homework in total
    total_homework = x1 + x2 + x3

    # hours to minutes before dinner
    total_free_mins_before_dinner = x4 * 60

    # minutes for John to nap
    nap_time = total_free_mins_before_dinner - total_homework

    return nap_time