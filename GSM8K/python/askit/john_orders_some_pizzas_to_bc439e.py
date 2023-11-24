# Recompilation count: 0
def john_orders_some_pizzas_to_bc439e(x1, x2, x3) -> int:
    # John orders some pizzas to share with his friends.  There are'x1'friends in total, 
    # and John wants to make sure each can have'x2'slices. Pizzas are only sold sliced into'x3'portions.
    # How many Pizzas does John need to order?

    total_slices_needed = x1 * x2
    pizzas_needed = total_slices_needed // x3

    if total_slices_needed % x3 != 0:
        pizzas_needed += 1
    return pizzas_needed