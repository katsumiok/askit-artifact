# Recompilation count: 0
def george_needs_to_pay_for_b59493(x1) -> int:
    # George needs to pay for dental work. He needs'x1'implants. Each implant has a base price of $2000. For one of the implants, he wants a crown made of porcelain. That feature costs an extra $500. He’s already put down a deposit of $600. He makes $15 per hour at work. How many hours does he need to work before he has enough to pay for the dental work?
    total_cost = (2000 * x1) + 500 - 600
    hours_needed = total_cost / 15
    return hours_needed