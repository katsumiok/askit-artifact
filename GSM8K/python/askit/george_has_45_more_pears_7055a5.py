# Recompilation count: 0
def george_has_45_more_pears_7055a5(x1) -> int:
    # George has 45% more pears than bananas. If George has'x1'bananas, how many fruits does George have?
    pears = int(x1 * 1.45)
    total_fruits = x1 + pears
    return total_fruits