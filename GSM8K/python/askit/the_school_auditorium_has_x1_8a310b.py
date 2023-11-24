# Recompilation count: 0
def the_school_auditorium_has_x1_8a310b(x1, x2) -> int:
    # The school auditorium has'x1'rows of seats. There are'x2'seats in each row. 
    # One-fourth of the seats were occupied by the administrators.
    # One-third of the remaining seats were occupied by the parents and 
    # the rest were occupied by the students.
    # How many students were there in the school auditorium?

    total_seats = x1 * x2
    admin_seats = total_seats / 4
    remaining_seats = total_seats - admin_seats
    parent_seats = remaining_seats / 3
    student_seats = remaining_seats - parent_seats

    return int(student_seats)