# Recompilation count: 0
def cherrie_wants_to_buy_christmas_a24047(x1, x2, x3, x4, x5, x6) -> int:
    # Cherrie wants to buy Christmas gifts for her'x1'friends.'x2'of her friends want'x3'gifts and the other'x4'friends want'x5'gifts for themselves. Cherrie goes ahead and buys them and decides to further surprise them by getting'x6'more random gifts. How many gifts did Cherrie buy in total?
    total_gifts = (x2 * x3) + (x4 * x5) + x6
    return total_gifts