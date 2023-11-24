# Recompilation count: 0
def rory_makes_a_cake_that_3f43cc(x1, x2) -> int:
    # Rory makes a cake that weighs'x1'ounces. She cuts into'x2'pieces. Rory and her mom each have a piece. How much does the remaining cake weigh?
    piece_weight = x1 / x2  # weight of each piece
    remaining_weight = x1 - (2 * piece_weight)  # remaining weight after taking 2 pieces
    return round(remaining_weight)  # return as an integer