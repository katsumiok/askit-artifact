# Recompilation count: 0
def ryan_s_allowance_is_6_38b404(x1, x2) -> int:
    # Ryan’s allowance is $6 each week he completes his chores. He did his chores for'x1'weeks. Then he bought ice cream cones for himself and'x2'friends at $1.25 each. Now they all want to go to the movies and tickets cost $6.50 each. How many movie tickets can Ryan buy?
    total_allowance = x1 * 6  # total money Ryan has after doing his chores
    total_ice_cream_cost = (x2 + 1) * 1.25  # total cost of ice creams for Ryan and his friends
    remaining_money = total_allowance - total_ice_cream_cost  # money remaining after buying ice creams

    # the number of movie tickets Ryan can buy
    movie_tickets = int(remaining_money // 6.5)

    return movie_tickets