# Recompilation count: 0

def amy_had_two_eyeshadow_palettes_c66063() -> int:
    # Amy had two eyeshadow palettes with four colors each and three makeup sets that came with six eyeshadow colors each. Her sister steals one of the palettes. Amy uses up half of the colors from one makeup set. How many eyeshadow colors does she have left?

    # Number of colors in two eyeshadow palettes 
    palette_colors = 2 * 4
    
    # Number of colors in three makeup sets
    makeup_set_colors = 3 * 6
    
    # Total colors initially
    total_colors = palette_colors + makeup_set_colors
    
    # Colors stolen by her sister
    stolen_colors = 4
    
    # Colors used up by Amy
    used_colors = 6 / 2
    
    # Remaining colors with Amy
    remaining_colors = total_colors - stolen_colors - used_colors
    
    return int(remaining_colors)