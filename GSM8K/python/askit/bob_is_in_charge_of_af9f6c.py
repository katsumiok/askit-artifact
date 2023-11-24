# Recompilation count: 0
def bob_is_in_charge_of_af9f6c(x1) -> int:
    # Bob is in charge of doing laundry for a large hotel. Each room has two sheets, one comforter, twice as many pillow cases as sheets and twice as many towels as pillow cases. How many pieces of laundry are there in'x1'rooms?
    sheets = 2 * x1
    comforters = x1
    pillow_cases = 2 * sheets
    towels = 2 * pillow_cases
    total_laundry = sheets + comforters + pillow_cases + towels
    return total_laundry