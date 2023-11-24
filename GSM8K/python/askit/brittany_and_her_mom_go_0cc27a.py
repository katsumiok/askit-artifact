# Recompilation count: 0
def brittany_and_her_mom_go_0cc27a(x1, x2) -> int:
    # adult ticket price
    adult_ticket = 12
    # child ticket price
    child_ticket = 10
    # the change received
    change = 8
    
    # total cost of tickets bought
    total_cost = (x1 * child_ticket) + (x2 * adult_ticket)
    
    # total money given to the cashier
    total_money_given = total_cost + change
    
    return total_money_given