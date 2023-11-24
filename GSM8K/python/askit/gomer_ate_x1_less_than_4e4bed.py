# Recompilation count: 5
def gomer_ate_x1_less_than_4e4bed(x1, x2, x3, x4, x5, x6) -> int:
    # Gomer ate'x1'less than'x2'scoops of mashed potatoes.  If it takes'x3'less than'x4'potatoes to make'x5'less than'x6'scoops of mashed potatoes, how many potatoes did Gomer eat?
    
    # Number of scoops Gomer ate
    scoops = x2 - x1
    
    # Potatoes required for one scoop
    potatoes_per_scoop = x4 - x3
    
    # Total scoops required
    total_scoops = x6 - x5
    
    # If total_scoops is zero, return zero to avoid division by zero in next calculation
    if total_scoops == 0:
        return 0
    
    # Number of potatoes per scoop
    potatoes_per_scoop = potatoes_per_scoop / total_scoops
    
    # Total potatoes Gomer ate
    total_potatoes = potatoes_per_scoop * scoops
    
    return total_potatoes