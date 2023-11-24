# Recompilation count: 0
def bill_is_ordering_a_new_8fb11f() -> int:
    # define the costs
    base_price = 30000
    king_cab = 7500
    leather_seats = king_cab / 3
    running_boards = leather_seats - 500
    exterior_lights = 1500

    # calculate total cost
    total_cost = base_price + king_cab + leather_seats + running_boards + exterior_lights

    return int(total_cost)