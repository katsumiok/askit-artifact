# Recompilation count: 0
def james_gets_x1_emails_a_fec90a(x1, x2) -> int:
    # James gets'x1'emails a day.  20% of those emails don't require any response.  He responds to the rest of them.  How many emails does he respond to in a'x2'day work week?
    non_response_emails = x1 * 0.2
    response_emails = x1 - non_response_emails
    response_emails_per_week = response_emails * x2
    return int(response_emails_per_week)