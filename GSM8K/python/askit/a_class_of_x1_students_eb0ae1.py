# Recompilation count: 9
def a_class_of_x1_students_eb0ae1(x1, x2, x3, x4) -> int:
    # A class of'x1'students is split into'x2'groups such that'x3'of them are equal in number and the last one (which is the smallest) is'x4'less than each of the other groups. How many students are in this (smallest) group?
    return (x1 - x3 * x4) // x2