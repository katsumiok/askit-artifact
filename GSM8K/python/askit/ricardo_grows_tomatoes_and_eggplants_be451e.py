# Recompilation count: 0
def ricardo_grows_tomatoes_and_eggplants_be451e(x1, x2, x3, x4) -> int:
    # Ricardo grows tomatoes and eggplants in his garden. Each tomato plant yields'x1'tomatoes while each plant of eggplant yields'x2'eggplants. 
    # He planted'x3'tomato plants and'x4'plants of eggplant. How many fruits can Ricardo get from his plants?
    tomatoes = x1 * x3
    eggplants = x2 * x4

    return tomatoes + eggplants