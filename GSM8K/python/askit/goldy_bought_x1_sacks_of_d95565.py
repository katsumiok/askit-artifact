# Recompilation count: 0
def goldy_bought_x1_sacks_of_d95565(x1, x2, x3, x4) -> int:
    # Goldy bought'x1'sacks of rice and gave'x2'sacks to her cousin and'x3'sacks to her brother, if there are'x4'kilograms of rice per sack, how many kilograms does she have now?
    total_sacks_given = x2 + x3
    total_kilograms_given = total_sacks_given * x4
    return total_kilograms_given