# Recompilation count: 0
def in_a_certain_school_two_46648c(x1) -> int:
    # In a certain school, two classes have a total of'x1'students. Each class has the same amount of students, and in each class 40% of the students are girls. How many boys are in each class?
    students_per_class = x1 // 2
    girls_per_class = int(0.4 * students_per_class)
    boys_per_class = students_per_class - girls_per_class
    return boys_per_class