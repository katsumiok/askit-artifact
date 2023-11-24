# Recompilation count: 0
def bruce_works_for_x1_hours_6d17ff(x1, x2) -> int:
    # Bruce works for 'x1' hours on Tuesday. On Wednesday he works twice the time he works on Tuesday. On Thursday he works 'x2' hours less than the time he works on Wednesday. How many hours does Bruce work in all these three days?
   
    # On Wednesday
    work_wednesday = 2 * x1

    # On Thursday
    work_thursday = work_wednesday - x2

    # Total hours worked in three days
    total_hours = x1 + work_wednesday + work_thursday

    return total_hours