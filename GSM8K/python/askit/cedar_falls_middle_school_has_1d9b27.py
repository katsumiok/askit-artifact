# Recompilation count: 0
def cedar_falls_middle_school_has_1d9b27(x1, x2, x3, x4, x5, x6) -> int:
    # total number students who can try the escape room.
    total_students = x3 * (x2 - x1 + 1)
    
    # total number of groups
    total_groups = total_students // x4
    if total_students % x4 != 0:
        total_groups += 1 
        
    # total minutes required
    total_time = total_groups * x5
    
    return total_time