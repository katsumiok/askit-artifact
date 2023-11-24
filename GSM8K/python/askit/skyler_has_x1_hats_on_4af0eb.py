# Recompilation count: 0
def skyler_has_x1_hats_on_4af0eb(x1) -> int:
    # Skyler has'x1'hats on his hand with the colors red, blue, and white. Half of the hats are red, 3/5 of the remaining hats are blue, and the rest are white. How many white hats does Skyler have?
    red_hats = x1 / 2
    remaining_hats = x1 - red_hats
    blue_hats = 3/5 * remaining_hats
    white_hats = remaining_hats - blue_hats
    return int(white_hats)