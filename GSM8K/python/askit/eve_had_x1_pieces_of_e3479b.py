# Recompilation count: 0
def eve_had_x1_pieces_of_e3479b(x1) -> int:
    # Eve had'x1'pieces of pomelos. After giving her friend some pomelos, Eve is left with 1/4 of the pomelos she originally had. How many pomelos did Eve give away?
    remaining_pomelos = x1 / 4
    given_away_pomelos = x1 - remaining_pomelos
    return int(given_away_pomelos)