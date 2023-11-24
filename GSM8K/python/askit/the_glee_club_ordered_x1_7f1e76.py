# Recompilation count: 0
def the_glee_club_ordered_x1_7f1e76(x1) -> int:
    glee_eaten = x1 * 0.7
    football_order = x1 * 2
    football_eaten = football_order * 0.8

    pizzas_left = x1 - glee_eaten + football_order - football_eaten

    return int(pizzas_left)