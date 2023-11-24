# Recompilation count: 0
def a_train_has_x1_people_cef08d(x1, x2, x3, x4) -> int:
    # A train has'x1'people traveling on it. At the first stop'x2'people get off and'x3'more people get on, and at the next stop another'x4'people get off. How many people are on the train?
    return x1 - x2 + x3 - x4