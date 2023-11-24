# Recompilation count: 0
def marilyn_s_first_record_sold_fbfa8b(x1) -> int:
    # Marilyn's first record sold 'x1' times as many copies as Harald's. 
    # If they sold 88,000 copies combined, how many copies did Harald sell?

    # Let's set Harald's sale as 'y'. Since Marilyn's sales are 'x1' times Harald's,
    # we can express Marilyns sales as 'x1*y'

    # We know that their combined sales are 88,000, so we can setup the equation:
    # x1*y + y = 88,000
    # Simplifying it we get:
    # y*(x1 + 1) = 88,000
    # Solving for 'y' we get:
    # y = 88,000 / (x1 + 1)
    # to find the number of copies Harald sold, we just need to return 'y'
    
    return 88000 / (x1 + 1)