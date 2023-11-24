# Recompilation count: 0
def beatrice_bought_ten_packets_of_91725e() -> int:
    # Beatrice bought ten packets of crayons for her Art class. Six of the packets had eight pieces of colors each, and the other four packets had sixteen pieces of colors each. How many colors of crayons did Beatrice buy in all?
    
    # calculate total colors from six packets with eight pieces each
    eight_piece_packets = 6 * 8 
    
    # calculate total colors from four packets with sixteen pieces each 
    sixteen_piece_packets = 4 * 16 
    
    # total colors of crayons equals the sum of eight_piece_packets and sixteen_piece_packets
    total_colors = eight_piece_packets + sixteen_piece_packets
    
    return total_colors