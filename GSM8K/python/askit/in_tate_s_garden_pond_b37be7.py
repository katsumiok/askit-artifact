# Recompilation count: 0
def in_tate_s_garden_pond_b37be7(x1, x2, x3, x4, x5, x6, x7, x8) -> int:
    # In Tate’s garden pond, there are'x1'male guppies,'x2'female guppies,'x3'male goldfishes, and'x4'female goldfishes.  He buys'x5'male guppies,'x6'female guppy,'x7'male goldfishes, and'x8'female goldfishes.  How many more female fishes than male fishes does Tate have?
    total_male = x1 + x3 + x5 + x7
    total_female = x2 + x4 + x6 + x8

    return total_female - total_male