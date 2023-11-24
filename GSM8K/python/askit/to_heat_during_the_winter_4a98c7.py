# Recompilation count: 0
def to_heat_during_the_winter_4a98c7(x1, x2) -> int:
    # To heat during the winter, Ali ordered'x1'kilos of coal. The coal is delivered in'x2'kg bags, costing $18 per unit. How much does his order cost?
    bag_needed = x1 // x2 if x1 % x2 == 0 else x1 // x2 + 1
    return bag_needed * 18