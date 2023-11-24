# Recompilation count: 1
def blake_and_kelly_are_having_934508(x1, x2, x3, x4) -> int:
    # Blake runs back and forth 'x3' times on a field that is 'x2' yards long. 
    # So, total distance run by Blake = 2 * x3 * x2 (as he runs back and forth)
    blake_distance = 2 * x2 * x3

    # On the other hand, Kelly runs back and forth once on the full field and then she runs to the 40-yard line and back 'x4' times.
    # So, total distance run by Kelly = 2 * x2 + 2 * x4 * 40
    kelly_distance = 2 * x2 + 2 * x4 * 40

    # We need to return the difference between the distances run by the winner and the loser.
    # The winner is the one who ran more. So, if Blake ran more, 
    # we subtract the distance run by Kelly from the distance run by Blake. 
    # If Kelly ran more, we do the opposite.
    if blake_distance > kelly_distance:
        return blake_distance - kelly_distance
    else:
        return kelly_distance - blake_distance