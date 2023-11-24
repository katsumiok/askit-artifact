# Recompilation count: 0
def lindsay_is_doing_the_laundry_cb2a47(x1, x2, x3) -> int:
    # Lindsay is doing the laundry, and thinks she has missed some socks. 
    # There are'x1'socks that need washing. 
    # If she washes'x2'pairs of socks and'x3'loose socks, 
    # how many socks has Lindsay missed?
    total_socks_washed = x2 * 2 + x3
    return x1 - total_socks_washed