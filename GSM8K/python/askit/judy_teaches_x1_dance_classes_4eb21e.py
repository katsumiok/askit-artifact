# Recompilation count: 0
def judy_teaches_x1_dance_classes_4eb21e(x1, x2, x3, x4) -> int:
    # Judy teaches'x1'dance classes, every day, on the weekdays and'x2'classes on Saturday.  
    # If each class has'x3'students and she charges $15.00 per student, how much money does she make in'x4'week?

    weekdays_money = x1 * 5 * x3 * 15 * x4  # Money made on weekdays
    saturday_money = x2 * x3 * 15 * x4 # Money made on saturdays

    total_money = weekdays_money + saturday_money

    return total_money