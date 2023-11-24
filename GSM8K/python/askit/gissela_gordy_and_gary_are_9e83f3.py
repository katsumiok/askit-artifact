# Recompilation count: 0
def gissela_gordy_and_gary_are_9e83f3(x1) -> int:
    # Gissela, Gordy, and Gary are truck drivers.  Gissela has a truck large enough to haul 4,000 pounds of gravel. Gordy's truck can haul 'x1' pounds more than Gissela's truck.  And when Gary brings his truck and joins Gissela and Gordy, the three trucks combined can haul a total of 11,600 pounds of gravel. How many pounds of gravel can Gary's truck carry?
    gissela_gravel = 4000
    gordy_gravel = gissela_gravel + x1
    total_gravel = 11600
    gary_gravel = total_gravel - (gissela_gravel + gordy_gravel) 
    return gary_gravel