# Recompilation count: 0
def theo_has_6000_he_wishes_af011b(x1, x2, x3) -> int:
    # calculate cost of business suits, suitcases and flight ticket
    suits_cost = x1 * 100
    suitcases_cost = x2 * 50
    flight_ticket_cost = (x3 * 100) + 700 
    # money spent on suits, suitcases and flight ticket
    total_spent = suits_cost + suitcases_cost + flight_ticket_cost 
    # Calculate the amount Theo has to spend for gifts
    gifts_spending = 6000 - total_spent - 2000
    return gifts_spending