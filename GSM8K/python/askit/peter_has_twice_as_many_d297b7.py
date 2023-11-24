# Recompilation count: 0
def peter_has_twice_as_many_d297b7(x1) -> int:
    # Peter has twice as many socks as Jack and half times as many dishes as jack. 
    # Jack collected twice as many dishes as socks in the store. 
    # If jack collected'x1'dishes, calculate the total number of socks and dishes they have together?
    
    # Calculate the number of socks Jack has collected
    jack_socks = x1 // 2
    # Calculate the number of dishes and socks Peter has
    peter_socks = 2 * jack_socks
    peter_dishes = x1 // 2
    # Total up all the dishes and socks
    total_items = jack_socks + x1 + peter_socks + peter_dishes
    return total_items