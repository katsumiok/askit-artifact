# Recompilation count: 0
def mrs_sherman_made_a_dozen_1fa450(x1, x2) -> int:
    # Mrs. Sherman made a dozen bread rolls for breakfast. After feeding her'x1'children with one each, she broke each of the remaining rolls into'x2'pieces and fed them to the chickens. How many pieces of rolls did she feed to the chickens?
    remaining_rolls = 12 - x1
    pieces_for_chickens = remaining_rolls * x2
    return pieces_for_chickens