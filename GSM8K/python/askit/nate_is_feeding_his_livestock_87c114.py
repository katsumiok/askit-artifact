# Recompilation count: 0
def nate_is_feeding_his_livestock_87c114(x1, x2, x3, x4) -> int:
    # Each goat needs'x1' pounds
    goat_hay = x1
    # Each sheep needs'x2' pounds less than twice the amount each goat needs
    sheep_hay = 2 * goat_hay - x2
    # Total hay needed is 'x3' times hay needed for goat plus 'x4' times hay needed for sheep
    total_hay_needed = x3 * goat_hay + x4 * sheep_hay
    return total_hay_needed