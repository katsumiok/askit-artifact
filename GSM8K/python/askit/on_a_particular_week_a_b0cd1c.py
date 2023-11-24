# Recompilation count: 0
def on_a_particular_week_a_b0cd1c() -> int:
    # On a particular week, a tow truck pulled ten cars for each of the first three days and then four fewer cars on each of the remaining days of the week. Calculate the total number of cars it towed that week.
    first_three_days = 10 * 3
    remaining_days = (10 - 4) * 4

    return first_three_days + remaining_days