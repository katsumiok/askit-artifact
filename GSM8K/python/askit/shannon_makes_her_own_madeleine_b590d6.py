# Recompilation count: 0
def shannon_makes_her_own_madeleine_b590d6(x1, x2, x3, x4) -> int:
    # Shannon makes her own madeleine cookies and eats'x1'a night as a treat.  
    # She wants to make enough cookies to last her for'x2'days by storing them in the freezer. 
    # Her recipe makes'x3'dozen madeleine cookies.  
    # How many dozens of cookies will she need to make so she has enough for'x4'days?
    total_cookies_needed = x1 * x4
    dozens_needed = total_cookies_needed // (x3*12)
    
    # Check if there is a remainder. If so, she needs to make one more dozen
    if total_cookies_needed % (x3*12) != 0:
        dozens_needed += 1
        
    return dozens_needed