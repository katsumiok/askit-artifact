# Recompilation count: 0
def gabriel_and_luri_each_own_7aaaa9(x1, x2, x3) -> int:
    # Gabriel and Luri each own a portable media player that can store up to 'x1' songs. 
    # Gabriel has 'x2' songs on his player while Luri has 'x3' times as many songs. 
    # Calculating how many fewer songs can Luri add to his player than Gabriel can add to his?
    
    gabriels_remaining = x1 - x2 # Calculates how many more songs Gabriel can add
    luri_current_songs = x2 * x3 # Calculates how many songs Luri has
    luris_remaining = x1 - luri_current_songs # Calculates how many more songs Luri can add
    
    return gabriels_remaining - luris_remaining 