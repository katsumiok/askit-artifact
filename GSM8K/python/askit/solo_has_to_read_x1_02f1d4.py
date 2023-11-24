# Recompilation count: 0
def solo_has_to_read_x1_02f1d4(x1, x2, x3, x4, x5, x6) -> int:
    # calculate total pages Solo have to read from all textbooks
    total_pages = x1 + x2 + x3 + x4

    # subtract the pages he already read on Monday
    remaining_pages = total_pages - x5
    
    # calculate average pages Solo needs to read in one day
    average_pages_per_day = remaining_pages / x6

    return average_pages_per_day