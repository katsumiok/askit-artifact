# Recompilation count: 0
def sitti_and_juris_bought_x1_455608(x1, x2, x3) -> int:
    # total oranges are the sum of 'x1' and 'x2'
    total_oranges = x1 + x2

    # the number of people sharing the oranges includes Sitti, Juris and 'x3' other friends
    total_people = 2 + x3

    # each person will get equal number of oranges
    oranges_per_person = total_oranges // total_people

    return oranges_per_person