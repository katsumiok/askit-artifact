# Recompilation count: 0
def at_a_certain_grade_level_69d510(x1) -> int:
    # At a certain grade level, three-fourths of students have a desktop computer at home. If'x1'students do not have desktop computers, how many students are there at that grade level?
    total_students = x1 / (1 - 3/4)
    return int(total_students)