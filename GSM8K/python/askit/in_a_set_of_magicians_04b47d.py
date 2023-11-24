# Recompilation count: 0
def in_a_set_of_magicians_04b47d(x1) -> int:
    # In a set of magicians cards, there are'x1'red cards, and 60% more green cards. Yellow cards are as many, as the sum of red and green cards. How many cards of all mentioned colors are there?
    green_cards = x1 * 1.6
    yellow_cards = x1 + green_cards
    total_cards = x1 + green_cards + yellow_cards
    return int(total_cards)