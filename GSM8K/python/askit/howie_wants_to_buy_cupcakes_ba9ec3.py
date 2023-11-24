# Recompilation count: 0
def howie_wants_to_buy_cupcakes_ba9ec3(x1, x2) -> int:
    # Howie wants to buy cupcakes for everyone in his class as a special treat. He's not sure if people will want vanilla or chocolate cupcakes so he decides to get one of each for everyone. If he gets the same amount of'x1'cupcakes for each himself, his teacher, and his'x2'classmates, how many cupcakes should Howie buy?

    # Adding 2 to 'x2' to account for Howie himself and his teacher
    total_people = x2 + 2
    
    # Multipling 'x1' by 'total_people' to find the total number of cupcakes Howie needs
    total_cupcakes = x1 * total_people

    return total_cupcakes