# Recompilation count: 0
def mark_is_making_a_quadruple_af497e(x1, x2) -> int:
    # Mark is making a quadruple batch of brownies. The normal recipe calls for'x1'cups of flour and'x2'cup milk. If flour is sold in 2-cup bags and milk is sold in 2-cup bottles, how many more bags of flour than bottles of milk does Mark have to buy?
    import math 
    flour_bags = math.ceil((4 * x1) / 2)
    milk_bottles = math.ceil((4 * x2) / 2)
    return flour_bags - milk_bottles