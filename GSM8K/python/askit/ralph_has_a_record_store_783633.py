# Recompilation count: 1
def ralph_has_a_record_store_783633(x1, x2, x3, x4, x5) -> int:
    # Ralph has a record store where people can trade their own records for new ones. People can trade'x1'old records for'x2'new one.'x3'people come in with old records and leave with'x4'new records between them. How many old records did the'x5'people bring in?
    # If 'x3' people leave with 'x4' new records between them, we can assume that each person gets 'x4/x3' new records on average.
    # Therefore, each person must bring an average of '(x4/x3)*x1' old records to trade for the new ones.
    # So, the total number of old records 'x5' people bring in would be 'x5 * (x4/x3)*x1'. We round the number to the nearest whole number because we can't have fractional records.
    return round(x5 * (x4/x3)*x1)