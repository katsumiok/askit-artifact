# Recompilation count: 1
def jim_is_making_a_comforter_20206a(x1, x2, x3, x4) -> int:
    # Jim is making a comforter for his king-sized bed. He needs two pieces of fabric that are'x1'feet longer and'x2'feet wider than the bed, which measures'x3'feet long by'x4'feet wide. How many square feet of fabric does Jim need to buy?
    fabric_length = x3 + x1
    fabric_width = x4 + x2
    total_fabric = fabric_length * fabric_width  #Calculating area of a single piece
    total_fabric *= 2  #Since he needs two pieces
    return total_fabric