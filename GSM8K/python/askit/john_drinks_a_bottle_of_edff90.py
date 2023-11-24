# Recompilation count: 0
def john_drinks_a_bottle_of_edff90(x1, x2) -> int:
    # John drinks a bottle of water every half hour.  A normal sudoku puzzle takes him'x1'minutes.
    # An extreme sudoku takes'x2'times that long. How many bottles of water does he drink in that time?
    total_minutes = x1 * x2
    total_hours = total_minutes / 60  # converting total minutes to hours
    return int(total_hours * 2)  # John drinks a bottle of water every half hour i.e., 2 bottles per hour