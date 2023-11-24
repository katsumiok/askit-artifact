# Recompilation count: 0
def if_mark_weighs_x1_pounds_58d02d(x1, x2, x3) -> int:
    # If Mark weighs'x1'pounds and Susan weighs'x2'pounds less than Mark.  And their friend Bob weighs twice as much as Susan.  What is the average weight of the'x3'friends?
    susan_weight = x1 - x2
    bob_weight = 2 * susan_weight
    total_weight = x1 + susan_weight + bob_weight
    average_weight = total_weight / x3
    return int(average_weight)