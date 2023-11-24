# Recompilation count: 0
def micheal_loves_riding_a_bike_cdd29a(x1, x2, x3, x4, x5) -> int:
    # Micheal loves riding a bike. He rode it at least'x1'times a week and makes'x2'kilometers each time. He did that for four weeks, and then he decided, to ride the bike only'x3'times a week, but for'x4'kilometers each time, and he did that for'x5'weeks. How many kilometers did Micheal do in total?
    first_four_weeks = x1 * x2 * 4
    remaining_weeks = x3 * x4 * x5
    total = first_four_weeks + remaining_weeks
    return total