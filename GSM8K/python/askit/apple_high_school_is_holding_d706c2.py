# Recompilation count: 0
def apple_high_school_is_holding_d706c2(x1, x2, x3) -> int:
    # Apple High School is holding graduation in their Fine Arts Center this year which has space for 'x1' people. 
    # After accounting for 'x2' seats for graduates and 'x3' seats for faculty attending, 
    # How many tickets would each graduate receive to give to their friends and family if the tickets are split equally?
    
    total_available_seats = x1 - x2 - x3
    tickets_per_graduate = total_available_seats // x2
    
    return tickets_per_graduate