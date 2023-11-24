# Recompilation count: 0
def james_is_putting_together_x1_87debf(x1, x2, x3, x4) -> int:
    # James is putting together'x1'tables.  Each table has'x2'legs and each leg needs'x3'screws.  He has'x4'screws.  How many screws will he have left over?
    total_screws_needed = x1 * x2 * x3
    screws_leftover = x4 - total_screws_needed
    return screws_leftover