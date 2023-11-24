# Recompilation count: 0
def belen_has_two_kinds_of_96b4eb(x1, x2, x3, x4, x5, x6) -> int:
    # Belen has two kinds of pennies, a'x1'penny and a'x2'penny. The'x3'penny is three-quarters of the weight of the'x4'penny. If the'x5'penny weighs'x6'grains, what is the combined weight of the two pennies?
    if x1 == x3 and x2 == x4:
        first_penny_weight = 0.75 * x6
        second_penny_weight = x6
    elif x1 == x5 and x2 == x4:
        first_penny_weight = x6
        second_penny_weight = x6 / 0.75
    else: 
        return "Provided variables don't match condition"
    return first_penny_weight + second_penny_weight