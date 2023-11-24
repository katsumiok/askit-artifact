# Recompilation count: 0
def martha_has_been_collecting_shells_4f32c5(x1) -> int:
    # Martha has been collecting shells since she turned'x1'years old, every month she collects one shell. By her 10th birthday, how many shells will Martha have collected?
    
    # Each year has 12 months, so by her 10th birthday, she will have lived 10 * 12 months.
    total_months_by_10th_birthday = 10 * 12
    
    # If she started collecting shells since she turned 'x1' years old, she will have 'x1' * 12 of those months without collecting shells.
    months_without_collecting_shells = x1 * 12
    
    # So, the total shells she has collected is the difference between the total months by her 10th birthday and the months she didn't collect shells.
    total_shells_collected = total_months_by_10th_birthday - months_without_collecting_shells
    
    return total_shells_collected