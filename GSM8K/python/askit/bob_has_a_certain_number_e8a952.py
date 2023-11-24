# Recompilation count: 0
def bob_has_a_certain_number_e8a952(x1, x2, x3) -> int:
    # Bob has a certain number of marbles. If he receives'x1'dozen more marbles, 
    # he will have'x2'marbles. If he loses'x3'of the marbles he has, how many marbles will Bob have?
    # First, convert 'x1' from dozens to single marbles
    x1 = x1 * 12
    # Now, subtract 'x1' from 'x2' to find out how many marbles Bob started with
    initial_marbles = x2 - x1
    # Finally, subtract 'x3' from the initial marbles to find out how many marbles Bob will have
    final_marbles = initial_marbles - x3
    return final_marbles