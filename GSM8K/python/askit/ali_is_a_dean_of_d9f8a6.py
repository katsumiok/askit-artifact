# Recompilation count: 0
def ali_is_a_dean_of_d9f8a6(x1) -> int:
    # Ali is a dean of a private school where he teaches one class.
    # John is also a dean of a public school. John has two classes in his school.
    # Each class has 1/8 the capacity of Ali’s class which has the capacity of'x1'students.
    # What is the combined capacity of both schools?

    john_class_capacity = x1 / 8
    john_total_capacity = john_class_capacity * 2
    combined_capacity = x1 + john_total_capacity

    return int(combined_capacity)