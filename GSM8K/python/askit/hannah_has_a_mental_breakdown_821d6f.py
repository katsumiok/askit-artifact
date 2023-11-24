# Recompilation count: 0
def hannah_has_a_mental_breakdown_821d6f(x1, x2) -> int:
    # Hannah smashes a quarter of the students' cars' windows 
    smashed_student_windows = x1 * 4 * 0.25
    # and 3/4ths of the teachers' cars' windows. 
    smashed_teacher_windows = x2 * 2 * 0.75
    # calculate total of smashed windows
    total_smashed_windows = int(smashed_student_windows + smashed_teacher_windows)
    return total_smashed_windows