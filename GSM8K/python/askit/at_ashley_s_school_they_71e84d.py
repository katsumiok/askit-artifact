# Recompilation count: 0
def at_ashley_s_school_they_71e84d(x1, x2, x3, x4) -> int:
    # At Ashley's school, they start a reforestation campaign where each child plants a tree and each teacher plants'x1'trees. The school has'x2'classes with an average of'x3'students and'x4'teachers per class. How many trees will they have planted at the end of the campaign?
    total_students = x2 * x3
    total_teachers = x2 * x4
    total_trees = total_students + (total_teachers * x1)
    return total_trees