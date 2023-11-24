# Recompilation count: 0
def lori_needed_x1_whole_egg_e2c55d(x1, x2, x3, x4) -> int:
    # Lori needed 'x1' whole egg to make 'x2' deviled egg halves. 
    # She anticipates that each of her guests will eat 'x3' deviled egg halves.  
    # If she is inviting 'x4' guests to her party, how many dozen eggs will she need?

    # Calculate total deviled egg halves needed
    total_halves_needed = x3 * x4

    # Calculate total whole eggs needed
    total_eggs_needed = (total_halves_needed / x2) * x1

    # Convert whole eggs to dozen
    total_dozen_eggs_needed = total_eggs_needed / 12

    # Round up to make sure she has enough eggs and return the result as an integer
    return int(total_dozen_eggs_needed)