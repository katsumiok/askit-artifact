# Recompilation count: 0
def pam_and_fred_went_to_774c83(x1, x2, x3, x4) -> int:
    # Pam rode the roller coaster'x1'times while Fred rode it'x2'times. After that, each of them decided to ride the luge'x3'times.
    # If each ride cost'x4'tickets, how many tickets did they use that day?
    total_tickets = (x1 + x2 + 2 * x3) * x4
    return total_tickets