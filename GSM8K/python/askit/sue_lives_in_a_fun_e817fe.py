# Recompilation count: 0
def sue_lives_in_a_fun_e817fe(x1, x2) -> int:
    # Initial flamingos are all pink
    pink_flamingos = x1
    
    # On Saturday, one third of pink flamingos are painted white
    white_flamingos = pink_flamingos // 3
    pink_flamingos -= white_flamingos
    
    # On Sunday, more pink flamingos are added
    pink_flamingos += x2
    
    # Return the difference between pink and white flamingos
    return pink_flamingos - white_flamingos