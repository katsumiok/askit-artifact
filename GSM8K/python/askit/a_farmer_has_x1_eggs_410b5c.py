# Recompilation count: 0
def a_farmer_has_x1_eggs_410b5c(x1, x2) -> int:
    # A farmer has'x1'eggs. He placed them on a tray, which holds'x2'eggs each. How much will the farmer earn if he sells it for $2.5 per tray?
    total_trays = x1 // x2  # calculate the total number of full trays
    earnings = total_trays * 2.5  # compute the earnings
    return earnings