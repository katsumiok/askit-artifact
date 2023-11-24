# Recompilation count: 1
def when_freda_cooks_canned_tomatoes_0e46f8(x1, x2) -> int:
    # When Freda cooks canned tomatoes into sauce, they lose half their volume.
    # Each'x1'ounce can of tomatoes that she uses contains three tomatoes. 
    # Freda’s last batch of tomato sauce made'x2'ounces of sauce. 
    # How many tomatoes did Freda use?
    
    # First, we need to find how many ounces of canned tomatoes she started with, which is twice the final volume of sauce.
    initial_ounces = x2 * 2 

    # Then, we divide this by the number of ounces per can to find how many cans.
    cans_used = initial_ounces / x1 

    # Each can contains three tomatoes.
    tomatoes_used = cans_used * 3 

    return int(tomatoes_used)