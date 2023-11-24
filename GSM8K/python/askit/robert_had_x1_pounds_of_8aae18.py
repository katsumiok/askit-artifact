# Recompilation count: 0
def robert_had_x1_pounds_of_8aae18(x1, x2, x3) -> int:
    # Robert had'x1'pounds of candy, Cindy had'x2'pounds of candy, and Aaron had'x3'pounds of candy after Halloween. If they decide to pool and share their candy equally with each other, how much candy would each of them have?
    total_candy = x1 + x2 + x3
    candy_per_person = total_candy // 3
    return candy_per_person