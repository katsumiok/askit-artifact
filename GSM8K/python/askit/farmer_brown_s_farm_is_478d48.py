# Recompilation count: 0
def farmer_brown_s_farm_is_478d48(x1, x2) -> int:
    # Farmer Brown's farm is'x1'acres, and Farmer Smith's farm is'x2'acres more than twice that. How many acres do the two farms have, together?
    farmer_smith_acres = x2 + 2 * x1
    total_acres = x1 + farmer_smith_acres
    
    return total_acres