# Recompilation count: 0
def lana_is_brewing_cups_of_42ae88(x1, x2, x3) -> int:
    # Lana is brewing cups of tea for her friends. She has'x1'cups, and she divides these into'x2'rows. 
    # In each row, she creates equal amounts of chamomile and mint tea cups. 
    # She then uses the remaining cups to brew a total of'x3'cups of cinnamon tea. 
    # How many cups of mint tea are in each row?

    # First, subtract the cups of cinnamon tea from the total cups she has
    total_chamomile_and_mint_cups = x1 - x3
    
    # She divides these into equal parts for chamomile and mint tea
    mint_cups_in_row = total_chamomile_and_mint_cups / (2 * x2)
    
    return mint_cups_in_row