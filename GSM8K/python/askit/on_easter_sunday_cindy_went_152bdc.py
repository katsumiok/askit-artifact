# Recompilation count: 0
def on_easter_sunday_cindy_went_152bdc(x1) -> int:
    # On Easter Sunday Cindy went to the city park to participate in the Easter Egg Hunt, and ended up with a basket full of eggs. She had'x1'green ones, twice as many blue ones as green ones, one fewer pink eggs than blue eggs, and one-third as many yellow eggs as pink eggs. How many eggs did Cindy have altogether?
    
    # twice as many blue ones as green ones
    blue_eggs = 2 * x1
    # one fewer pink eggs than blue eggs
    pink_eggs = blue_eggs - 1
    # one-third as many yellow eggs as pink eggs
    yellow_eggs = pink_eggs / 3
    
    # add all eggs
    total_eggs = x1 + blue_eggs + pink_eggs + yellow_eggs

    return total_eggs