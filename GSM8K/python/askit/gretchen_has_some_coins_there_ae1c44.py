# Recompilation count: 0
def gretchen_has_some_coins_there_ae1c44(x1, x2) -> int:
    # Gretchen has some coins. There are 'x1' more gold coins than silver coins. If she had 'x2' gold coins, how many coins did Gretchen have in total?
    # The number of silver coins is 'x2' - 'x1'
    silver_coins = x2 - x1
    
    # Total number of coins is the sum of gold and silver coins
    total_coins = silver_coins + x2
    
    return total_coins