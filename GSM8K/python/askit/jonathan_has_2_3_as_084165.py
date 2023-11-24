# Recompilation count: 0
def jonathan_has_2_3_as_084165(x1) -> int:
    # Jonathan has 2/3 as many measuring spoons as measuring cups. If he has two dozen cups and gifts Pedro'x1'measuring spoons for his birthday, calculate the total number of utensils Jonathan has remaining.
    total_cups = 2 * 12  # Two dozen cups
    total_spoons = int((2/3) * total_cups)  # 2/3 as many spoons
    remaining_spoons = total_spoons - x1  # Spoons after gifting some to Pedro
    total_utensils = total_cups + remaining_spoons  # Total utensils remaining
    return total_utensils