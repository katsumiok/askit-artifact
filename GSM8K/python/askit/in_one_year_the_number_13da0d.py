# Recompilation count: 0
def in_one_year_the_number_13da0d(x1) -> int:
    # In one year, the number of students on campus doubles at the end of every month. 
    # If there are 'x1' students on campus at the beginning of the year, how many additional students would have joined by the end of May, 
    # above and beyond the number of students already on campus at the beginning of the year?

    # The number of students at the end of May would be x1 * 2**5 (since it doubles every month for 5 months)
    end_of_may = x1 * 2**5

    # The additional students is the total at the end of May minus the initial students
    additional_students = end_of_may - x1

    return additional_students