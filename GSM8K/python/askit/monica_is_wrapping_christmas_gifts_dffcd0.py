# Recompilation count: 0
def monica_is_wrapping_christmas_gifts_dffcd0(x1, x2, x3, x4) -> int:
    # Monica is wrapping Christmas gifts. She has'x1'gifts to wrap for her family,'x2'gifts to wrap for her friends and'x3'gifts to wrap for her teachers. She has'x4'inches of ribbon and wants to make a bow for each gift with it. How many inches of ribbon can she use for each gift bow?
    total_gifts = x1 + x2 + x3
    inches_per_gift = x4 // total_gifts
    return inches_per_gift