# Recompilation count: 0
def carly_had_x1_cards_2_edbbec(x1) -> int:
    # Carly had'x1'cards, 2/5 of the cards had the letter A on them
    cards_a = 2/5 * x1
    # 1/2 of the remaining had the letter B
    cards_b = 1/2 * (x1 - cards_a)
    # 5/8 of the rest had the letter C on them
    cards_c = 5/8 * (x1 - cards_a - cards_b)
    # the others had the letter D
    cards_d = x1 - cards_a - cards_b - cards_c

    return round(cards_d)