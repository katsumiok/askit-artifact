# Recompilation count: 0
def jade_bought_a_new_cell_ef2534(x1, x2, x3) -> int:
    # divide total photos by photos uploaded per day
    total_batches = x1 / x2  # total number of batches
    total_days = total_batches / x3 # number of days
    return round(total_days) # rounding off to get number of days in integer