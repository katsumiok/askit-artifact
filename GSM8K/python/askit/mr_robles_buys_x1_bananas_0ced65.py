# Recompilation count: 0
def mr_robles_buys_x1_bananas_0ced65(x1, x2, x3) -> int:
    # calculating the total bananas consumed by first and second monkeys each day
    total_bananas_by_first_and_second_monkeys_per_day = x2 + (x2 + x3)

    # calculating how many bananas are there for each day 
    bananas_per_day = x1 / 7

    # calculating how many bananas the third monkey eats each day by getting the difference
    bananas_for_third_monkey = bananas_per_day - total_bananas_by_first_and_second_monkeys_per_day

    return int(bananas_for_third_monkey)