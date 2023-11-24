# Recompilation count: 0
def twenty_tourists_discovered_x1_shells_5fec15(x1) -> int:
    # total shells found by team Alphas
    shells_alphas = 0.4 * x1
    
    # Shells left after Alphas found their shells
    remaining_shells = x1 - shells_alphas
    
    # Shells found by team The Finders
    shells_finders = 0.6 * remaining_shells
    
    # Shells found by team Gogetters
    shells_gogetters = remaining_shells - shells_finders
    
    return int(shells_gogetters)