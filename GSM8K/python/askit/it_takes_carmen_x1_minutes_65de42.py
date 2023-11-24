# Recompilation count: 0
def it_takes_carmen_x1_minutes_65de42(x1, x2, x3, x4) -> int:
    # It takes Carmen'x1'minutes to finish a crossword puzzle and'x2'minutes to finish a sudoku puzzle. Over the weekend she solved'x3'crossword puzzles and'x4'sudoku puzzles. How much time did she spend playing these games?
    
    total_time_spent = (x1 * x3) + (x2 * x4)

    return total_time_spent