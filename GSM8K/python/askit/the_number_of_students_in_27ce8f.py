# Recompilation count: 0
def the_number_of_students_in_27ce8f(x1) -> int:
    # The number of students in a school hall was 1000. The hall had'x1'entrances A, B, and C which also served as the exits. If after a meeting 30% of the students went out of the building through exit A, 3/5 of the remaining went out through exit B, and the rest went out through exit C, calculate the number of students who went out through exit C.

    total_students = 1000

    #students leaving from exit A
    exit_a_students = total_students * 0.30

    #students remaining after exit A
    remaining_students_after_a = total_students - exit_a_students

    #students leaving from exit B
    exit_b_students = remaining_students_after_a * (3/5)

    #students remaining after exit B
    remaining_students_after_b = remaining_students_after_a - exit_b_students

    #students leaving from exit C
    exit_c_students = remaining_students_after_b

    return int(exit_c_students)