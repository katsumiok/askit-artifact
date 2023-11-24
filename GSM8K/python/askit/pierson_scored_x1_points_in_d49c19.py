# Recompilation count: 0
def pierson_scored_x1_points_in_d49c19(x1, x2) -> int:
    # Pierson scored'x1'points in one game of bowling. Nikita scored'x2'more than half as many as Pierson. How many points did Pierson and Nikita have in total?
    nikita_points = (x1 / 2) + x2
    total_points = x1 + nikita_points
    return int(total_points)