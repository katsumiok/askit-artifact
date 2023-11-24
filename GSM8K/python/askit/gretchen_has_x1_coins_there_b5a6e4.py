# Recompilation count: 0
def gretchen_has_x1_coins_there_b5a6e4(x1, x2) -> int:
    # Gretchen has 'x1' coins. There are 'x2' more gold coins than silver coins. How many gold coins does Gretchen have?
    # The total number of coins is x1, and there are x2 more gold coins than silver coins.
    # This can be modeled as silver_coins + gold_coins = x1 and gold_coins = silver_coins + x2
    # Solving these equations gives silver_coins = (x1 - x2) / 2 and, therefore, gold_coins = x1 - silver_coins
    silver_coins = (x1 - x2) / 2
    gold_coins = x1 - silver_coins
    return gold_coins