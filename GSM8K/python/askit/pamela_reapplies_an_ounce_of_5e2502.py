# Recompilation count: 0
def pamela_reapplies_an_ounce_of_5e2502(x1, x2) -> int:
    # Pamela reapplies an ounce of sunscreen every hour she's outside.  
    # Her sunscreen comes in 8-ounce bottles.  
    # While on vacation, if she will be outside 'x1' hours a day over 'x2' days, 
    # how many bottles of sunscreen will she need to pack?
   
    # total sunscreen needed (in ounces)
    total_sunscreen = x1 * x2
    
    # total bottles needed
    total_bottles = total_sunscreen // 8

    # Check if there is a remainder. If so, she will need one more bottle.
    if total_sunscreen % 8 != 0:
        total_bottles += 1

    return total_bottles