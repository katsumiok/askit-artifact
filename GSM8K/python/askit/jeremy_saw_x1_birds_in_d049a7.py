# Recompilation count: 0
def jeremy_saw_x1_birds_in_d049a7(x1, x2) -> int:
    # Jeremy saw 'x1' birds in their backyard and threw a stone at them, scaring away 1/3 of that number. A few minutes later, 'x2' more birds joined the fearless birds. How many birds are now in the backyard?
    scared_away_birds = x1 // 3
    remaining_birds = x1 - scared_away_birds
    total_birds_now = remaining_birds + x2
    return total_birds_now