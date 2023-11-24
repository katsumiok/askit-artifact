# Recompilation count: 0
def bryce_and_four_of_his_a56c1d(x1) -> int:
    # Bryce and four of his friends each ordered their own pizzas after football practice. Each pizza had'x1'slices. Bryce and two friends ate 2/3 of their pizzas. The two remaining friends ate ¾ of their pizzas. How many slices of pizza were left?
    total_slices = 5 * x1
    # Bryce and two friends ate 2/3 of their pizzas.
    three_students_eaten_slices = 3 * (2/3) * x1
    # The two remaining friends ate ¾ of their pizzas.
    two_students_eaten_slices = 2 * (3/4) * x1
    # Slices left
    slices_left = total_slices - (three_students_eaten_slices + two_students_eaten_slices)
    return slices_left