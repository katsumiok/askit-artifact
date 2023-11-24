# Recompilation count: 0
def brook_hills_high_school_currently_04ac34(x1, x2, x3, x4, x5) -> int:
    # Brook Hills High School currently enrolls'x1'students. Half of these students are over'x2'years old, 
    # and one-fourth of the students over'x3'years old are male. 
    # The remaining half of the students are under'x4'years old, and one-half of the students under'x5'are male. 
    # In total, how many female students are enrolled at this school?
    
    students_over_x2 = x1 / 2
    male_students_over_x3 = students_over_x2 / 4

    students_under_x4 = x1 / 2
    male_students_under_x5 = students_under_x4 / 2

    total_male_students = male_students_over_x3 + male_students_under_x5
    total_female_students = x1 - total_male_students

    return int(total_female_students)