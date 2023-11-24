# Recompilation count: 0
def ginger_and_amy_both_start_1bb86a(x1, x2, x3) -> int:
    # Ginger and Amy both start with'x1'pieces of Halloween candy. Ginger eats'x2'pieces a day and Amy eats'x3'pieces a day. How much more candy does Amy have after two weeks?
    ginger_candy_remaining = x1 - (x2 * 14) # Ginger's remaining candy after 14 days
    amy_candy_remaining = x1 - (x3 * 14) # Amy's remaining candy after 14 days

    return amy_candy_remaining - ginger_candy_remaining # how much more candy Amy has