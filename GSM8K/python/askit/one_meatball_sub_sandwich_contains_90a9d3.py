# Recompilation count: 0
def one_meatball_sub_sandwich_contains_90a9d3(x1, x2, x3) -> int:
    # One meatball sub sandwich contains'x1' meatballs. 
    # Sidney ordered'x2' less than ten meatball sub sandwiches. 
    # Then Mark ate'x3' of Sidney's meatball sub sandwiches. 
    # So Sidney ordered another three sub sandwiches.  
    # How many meatballs were in the sub sandwiches that remained?

    # Calculate the number of sandwiches Sidney ordered initially
    total_sandwiches_initially = 10 - x2
    
    # Calculate how many sandwiches are left after Mark ate
    remaining_sandwiches_after_merk = total_sandwiches_initially - x3

    # Sidney ordered another three sandwiches
    total_sandwiches = remaining_sandwiches_after_merk + 3
    
    # Calculate total meatballs
    total_meatballs = total_sandwiches * x1

    return total_meatballs