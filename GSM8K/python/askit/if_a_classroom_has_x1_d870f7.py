# Recompilation count: 0
def if_a_classroom_has_x1_d870f7(x1, x2) -> int:
    # If a classroom has 'x1' times as many girls as they do boys, and 1/10 as many non-gendered children as they do boys, and the classroom has 'x2' boys.  How many total children does it have?

    # Number of girls in the classroom
    girls = x1 * x2

    # Number of non-gendered children in the classroom
    non_gendered = x2 / 10

    # Total number of children
    total_children = girls + non_gendered + x2

    return int(total_children)