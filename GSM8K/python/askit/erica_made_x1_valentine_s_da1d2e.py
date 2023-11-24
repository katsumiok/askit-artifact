# Recompilation count: 0
def erica_made_x1_valentine_s_da1d2e(x1, x2, x3, x4, x5, x6) -> int:
    # Erica made'x1'Valentine's cards to pass out.  Her dad brought her'x2'boxes of pre-made Valentine's cards that had'x3'cards each.  She passed out'x4'to her classmates,'x5'to her family and received'x6'from family and friends.  
    # How many Valentine's Day cards does Erica now have?
    
    total_cards_made_or_received = x1 + (x2 * x3) + x6
    total_cards_given_away = x4 + x5
    
    remaining_cards = total_cards_made_or_received - total_cards_given_away
    
    return remaining_cards