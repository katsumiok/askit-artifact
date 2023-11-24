# Recompilation count: 0

def brendan_has_a_bag_of_88119f(x1) -> int:
    # Brendan has a bag of marbles with'x1'inside. He tripped over a pebble while carrying it and dropped half of them.
    # He scrambled to search for them but only came up with 3. When he went back home, he inspected the marbles further.
    # One of them he picked up wasn't a marble, but actually a bead so he got rid of it. 
    
    # Half the marbles are dropped
    x1 /= 2
    
    # Brendan finds 3 marbles
    x1 += 3
    
    # Brendan gets rid of 1 bead (not a marble)
    x1 -= 1
    
    # Number of marbles Brendan ended up with
    return int(x1)