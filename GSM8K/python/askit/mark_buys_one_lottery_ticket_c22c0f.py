# Recompilation count: 0
def mark_buys_one_lottery_ticket_c22c0f() -> int:
    # The probability of two independent events both occurring is the 
    # product of their individual probabilities.
    # The first ticket has a 20% chance of winning, or 0.2. The second ticket 
    # is three times as likely to win, or 0.6.
    
    # Calculate the probability that both tickets win.
    probability = 0.2 * 0.6

    # Convert this to a percentage.
    percentage_probability = probability * 100

    # Round to the nearest whole number and return.
    return round(percentage_probability)