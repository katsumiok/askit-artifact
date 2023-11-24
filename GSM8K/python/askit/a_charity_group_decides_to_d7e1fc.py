# Recompilation count: 0
def a_charity_group_decides_to_d7e1fc(x1, x2, x3, x4, x5) -> int:
    # A charity group decides to do a yard sale.'x1'people donate'x2'boxes of stuff each.  They also have'x3'boxes of stuff already.  They can fit'x4'boxes worth of stuff per table.  If they already own'x5'tables, how many new tables do they need?

    # calculate total number of boxes
    total_boxes = (x1*x2) + x3 

    # calculate total tables needed
    tables_needed = total_boxes // x4
    if total_boxes % x4 != 0:
        tables_needed += 1

    # determine how many new tables needed
    new_tables = tables_needed - x5 if tables_needed > x5 else 0

    return new_tables