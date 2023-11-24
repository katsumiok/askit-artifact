# Recompilation count: 0
def tobias_bought_a_big_pizza_29a5f2(x1, x2) -> int:
    # Tobias bought a big pizza with'x1'pieces. He ate 2/5 of the pieces on the first day,'x2'pieces on the second day,
    # and 7/13 of the remaining pieces on the third day. How many pizza pieces has he eaten so far?
    
    # On the first day Tobias ate 2/5 of the total pieces, x1
    first_day = x1 * 2 / 5 
    
    remaining_after_first_day = x1 - first_day

    # On the second day, he ate 'x2' pieces
    second_day = x2

    remaining_after_second_day = remaining_after_first_day - second_day
    
    # On the third day, he ate 7/13 of the remaining pieces
    third_day = remaining_after_second_day * 7 / 13
    
    # Total number of pieces eaten till now
    total_eaten = first_day + second_day + third_day
    
    return int(total_eaten)