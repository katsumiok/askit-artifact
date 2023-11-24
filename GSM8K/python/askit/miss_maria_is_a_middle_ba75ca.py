# Recompilation count: 0
def miss_maria_is_a_middle_ba75ca(x1, x2, x3) -> int:
    # Miss Maria is a middle school teacher, and she loves to collect sports cards. 
    # She has six decks with'x1'basketball cards in each deck 
    # and five boxes with'x2'baseball cards in each box. 
    # She keeps'x3'cards and gives the remaining cards to her students. 
    # If her students got ten cards each, how many students does Miss Maria have?
    total_cards = 6 * x1 + 5 * x2
    cards_remaining_after_she_keeps_some = total_cards - x3
    number_of_students = cards_remaining_after_she_keeps_some // 10
    return number_of_students