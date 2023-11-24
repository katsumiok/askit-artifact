# Recompilation count: 0
def a_jellyfish_tank_has_numerous_ffd42c(x1) -> int:
    # A jellyfish tank has numerous jellyfish in it. A fifth of the jellyfish are 
    # large, and a third of the large jellyfish change color from green to blue 
    # under UV light. The other jellyfish are small and always stay blue. When 
    # a UV light turned on, 'x1' jellyfish changed color. How many jellyfish are in the tank?
    
    # Note: If 'x1' jellyfish changed color, all of these must be the large jellyfish that
    # change color under UV light. Further, these represent a third of
    # all large jellyfish. We can thus calculate the total number of large 
    # jellyfish by tripling 'x1'.
    
    large_jellyfish = x1 * 3
    
    # Since a fifth of the total jellyfish are large, the total number of jellyfish
    # in the tank is five times the number of large jellyfish.
    
    total_jellyfish = large_jellyfish * 5
    
    return total_jellyfish