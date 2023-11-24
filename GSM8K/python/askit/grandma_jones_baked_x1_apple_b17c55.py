# Recompilation count: 0
def grandma_jones_baked_x1_apple_b17c55(x1, x2, x3) -> int:

    # Total pieces of pie baked initially = number of pies * pieces in each pie
    total_pieces = x1 * x2

    # Pieces taken by the guests = total pieces - remaining pieces
    pieces_taken = total_pieces - x3

    return pieces_taken