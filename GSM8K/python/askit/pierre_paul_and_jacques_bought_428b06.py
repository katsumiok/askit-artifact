# Recompilation count: 0
def pierre_paul_and_jacques_bought_428b06(x1) -> int:
    # Pierre, Paul, and Jacques bought'x1'kg of apples. Peter wants a quarter of that and Paul wants 1/3 of that. How many kilograms will James have left?
    pierre = x1 // 4
    paul = x1 // 3
    jacques = x1 - (pierre + paul)  
    return jacques