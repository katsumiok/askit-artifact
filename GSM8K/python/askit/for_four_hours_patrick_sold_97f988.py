# Recompilation count: 0
def for_four_hours_patrick_sold_97f988(x1, x2, x3) -> int:
    hours = x3
    money = 0
    if hours >= 4:
        money += 4 * x1 * 0.5
        hours -= 4
    else:
        money += hours * x1 * 0.5
        return money
    if hours >= 2:
        money += 2 * x2 * 0.6
        hours -= 2
    else:
        money += hours * x2 * 0.6
        return money
    return money