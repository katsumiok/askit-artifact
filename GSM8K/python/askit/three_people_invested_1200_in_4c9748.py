# Recompilation count: 0
def three_people_invested_1200_in_4c9748() -> int:
    total_investment = 1200
    # Dylan's investment
    dylan = total_investment * 2/5
    # Remaining amount after Dylan's investment
    remaining_amount = total_investment - dylan
    # Frances's investment
    frances = remaining_amount * 2/3
    # Skyler's investment
    skyler = remaining_amount - frances
    return int(skyler)