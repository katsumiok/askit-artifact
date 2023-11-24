# Recompilation count: 0
def finn_watches_x1_tadpoles_swimming_e25518(x1, x2, x3) -> int:
    # Finn watches'x1'tadpoles swimming in the pond.
    # Suddenly he sees'x2'of them come out of hiding from under a lily pad,
    # then he sees'x3'of them hide under a rock. 
    # How many tadpoles can Finn see in the pond now?

    # Initial count of tadpoles is 'x1'
    # 'x2' tadpoles come out adds to the visible count
    # 'x3' tadpoles hide under a rock, reduces from the visible count
    return x1 + x2 - x3