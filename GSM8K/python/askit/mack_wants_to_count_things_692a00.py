# Recompilation count: 0
def mack_wants_to_count_things_692a00(x1, x2, x3) -> int:
    # Mack wants to count things and decided to count how many birds there are in the sky over the next week. On days one and two, Mack saw a total of'x1'birds. On day three he saw none. On days four and five, he saw'x2'birds. On day six he saw'x3'and on day seven he saw 90. On average, how many birds did Mack see in a day?
    total_birds = x1 + x2 + x3 + 90
    average_birds_per_day = total_birds // 7
    return average_birds_per_day