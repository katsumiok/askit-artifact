# Recompilation count: 0
def miss_albert_s_class_is_df95e9(x1, x2) -> int:
    # Miss Albert's class is composed of'x1'boys and'x2'girls. One-third of the girls and one-fourth of the boys are on varsity. How many students are not on varsity?
    boys_on_varsity = x1 / 4
    girls_on_varsity = x2 / 3
    total_students = x1 + x2
    total_on_varsity = boys_on_varsity + girls_on_varsity
    return total_students - total_on_varsity