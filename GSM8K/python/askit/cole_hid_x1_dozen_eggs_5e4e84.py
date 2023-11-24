# Recompilation count: 0
def cole_hid_x1_dozen_eggs_5e4e84(x1, x2, x3) -> int:
    # Cole hid'x1'dozen eggs in the yard for the Easter egg hunt.  Lamar finds'x2'eggs. Stacy finds twice as many as Lamar.  Charlie finds'x3'less than Stacy.  And Mei finds half as many as Charlie.  How many eggs are still hidden in the yard?
    # convert dozens to single eggs
    total_eggs = x1 * 12
    # Stacy finds twice as many as Lamar.
    stacy_found = x2 * 2
    # Charlie finds 'x3' less than Stacy.
    charlie_found = stacy_found - x3
    # Mei finds half as many as Charlie.
    mei_found = charlie_found / 2
    # Total found eggs
    total_found = x2 + stacy_found + charlie_found + mei_found
    # still hidden eggs
    still_hidden = total_eggs - total_found
    return int(still_hidden)