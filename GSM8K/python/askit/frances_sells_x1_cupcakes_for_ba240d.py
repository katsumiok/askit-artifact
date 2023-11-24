# Recompilation count: 0
def frances_sells_x1_cupcakes_for_ba240d(x1, x2) -> int:
    # Frances sells 'x1' cupcakes for $2 for each cupcake and 'x2' cookies at $1 each.
    # She buys five trays at $4 each tray. How much money does Frances have left?
    
    revenue_from_cupcakes = x1 * 2  # revenue from selling 'x1' cupcakes
    revenue_from_cookies = x2 * 1  # revenue from selling 'x2' cookies
    cost_of_trays = 5 * 4  # cost of buying 5 trays

    total_revenue = revenue_from_cupcakes + revenue_from_cookies  # total amount Frances earns
    money_left = total_revenue - cost_of_trays  # amount left after buying trays

    return money_left