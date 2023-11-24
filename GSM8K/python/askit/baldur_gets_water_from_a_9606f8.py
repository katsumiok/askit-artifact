# Recompilation count: 0
def baldur_gets_water_from_a_9606f8(x1, x2, x3) -> int:
    # Baldur gets water from a well. He gets'x1'pails of water every morning and'x2'pails of water every afternoon. If each pail contains'x3'liters of water, how many liters of water does he get every day?
    total_pails = x1 + x2 # total number of pails Baldur gets every day
    total_liters = total_pails * x3 # total liters of water Baldur gets every day
    return total_liters