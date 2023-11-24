# Recompilation count: 0
def david_and_dasha_went_to_9bd8d0(x1, x2, x3, x4) -> int:
    # David and Dasha went to the carnival, where there are'x1'rides.  Each ride costs'x2'ride tickets at $2 per ticket.  
    # You can also buy a ride bracelet for $30 which gives you'x3'rides.  If David buys a ride bracelet and Dasha buys tickets, 
    # and they ride all'x4'rides, how much money does David save?

    # Calculate the total cost if David buys tickets
    cost_tickets = x2 * x4 * 2  # cost of ride tickets * number of rides * $2 per ticket

    # Calculate the total cost if David buys a ride bracelet
    cost_bracelet = 30  # cost of ride bracelet

    # If David buys a ride bracelet and Dasha buys tickets, and they ride all rides, how much money does David save?
    savings = cost_tickets - cost_bracelet
    return savings