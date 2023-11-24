# Recompilation count: 0
def it_takes_matthew_x1_minutes_214d15(x1, x2, x3, x4) -> int:
    # It takes Matthew'x1'minutes to dig a small hole for shrubs and'x2'minutes to dig a large hole for trees.  
    # How many hours will it take him to dig'x3'small holes and'x4'large holes?

    total_minutes = (x1 * x3) + (x2 * x4)
    hours = total_minutes // 60
    return hours