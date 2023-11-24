# Recompilation count: 0
def paul_has_x1_marbles_his_c9192d(x1, x2) -> int:
    # Paul's total marbles after his friend gave him
    total_marbles = x1 + x2
    # Paul lost 1/4 of his marbles
    marbles_lost = total_marbles / 4
    # Paul's marbles left
    marbles_left = total_marbles - marbles_lost
    return int(marbles_left)