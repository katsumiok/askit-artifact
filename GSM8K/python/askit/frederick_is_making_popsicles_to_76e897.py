# Recompilation count: 3
def frederick_is_making_popsicles_to_76e897(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10) -> int:
    # Cost per stick for 'x7'x'x8'
    cost_per_stick1 = 4 / x1
    # Cost per stick for 'x9'x'x10'
    cost_per_stick2 = 6 / x4

    # Total amount of sticks
    total_sticks = 0

    # Amount of money Frederick has
    money = 24

    while money > 0:
        if cost_per_stick1 <= cost_per_stick2 and money >= 4:
            total_sticks += x1
            money -= 4
        elif cost_per_stick2 < cost_per_stick1 and money >= 6:
            total_sticks += x4
            money -= 6
        else:
            break

    return total_sticks