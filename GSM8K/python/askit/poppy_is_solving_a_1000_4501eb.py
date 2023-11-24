# Recompilation count: 0
def poppy_is_solving_a_1000_4501eb() -> int:
    # Poppy is solving a 1000-piece jigsaw puzzle. She places a quarter of the pieces on the board, 
    # then her mom places a third of the remaining pieces. How many jigsaw pieces are left to be placed?
    total_pieces = 1000
    poppy_pieces = total_pieces / 4  # Poppy places a quarter of the pieces
    remaining_pieces_after_poppy = total_pieces - poppy_pieces 
    mom_pieces = remaining_pieces_after_poppy / 3  # Mom places a third of the remaining pieces

    # The number of pieces left to be placed is the total pieces minus the pieces placed by Poppy and her mom
    remaining_pieces = total_pieces - poppy_pieces - mom_pieces

    return int(remaining_pieces)  # Return the integer value of the remaining_pieces