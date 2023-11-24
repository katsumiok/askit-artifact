# Recompilation count: 0
import math

def greg_puts_clean_sheets_on_94831b(x1, x2, x3, x4) -> int:
    # calculate number of loads for each type of bed
    twin_loads = math.ceil(x1 / x3) # 'math.ceil' is used to round up because Greg can't wash half a load
    king_loads = math.ceil(x2 / x4)

    # compute total loads per week and then total loads for the year (52 weeks)
    total_loads = (twin_loads + king_loads) * 52

    return total_loads