# Recompilation count: 0
def bennet_is_a_farmer_he_0e97d0(x1, x2) -> int:
    # Bennet is a farmer. He sells 'x1' of his eggplants for $3 each. He has 'x2' ears of corn that he can sell as well. If Bennet wants to make a total of $135, how much should he sell each ear of corn for?
    total_price_eggplants = x1 * 3
    remaining_money_to_make = 135 - total_price_eggplants
    price_per_ear_of_corn = remaining_money_to_make / x2
    return price_per_ear_of_corn