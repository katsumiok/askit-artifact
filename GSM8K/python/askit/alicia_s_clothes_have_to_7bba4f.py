# Recompilation count: 0
def alicia_s_clothes_have_to_7bba4f(x1, x2, x3, x4) -> int:
    # Alicia's clothes have to be sent to the dry cleaners weekly.  Her weekly drop-off includes'x1'blouses,'x2'pants and'x3'skirt.  
    # If they charge her $5.00 per blouse, $6.00 per skirt and $8.00 per pair of pants, how much does she spend on dry-cleaning in'x4'weeks?
    
    cost_per_week = (x1 * 5) + (x2 * 8) + (x3 * 6)
    total_cost = cost_per_week * x4
    return total_cost