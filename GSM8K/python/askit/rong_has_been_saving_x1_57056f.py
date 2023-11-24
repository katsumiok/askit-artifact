# Recompilation count: 0
def rong_has_been_saving_x1_57056f(x1) -> int:
    # Rong has been saving'x1'coins in his piggy bank every month. Neil has been saving 2/5 times more coins in his piggy bank per month than Rong. How many coins are they having ten years after they started their savings?

    # Coins saved by Rong in 10 years
    rong_coins = x1 * 12 * 10 
    
    # Coins saved by Neil in 10 years
    neil_coins = rong_coins * (1 + 2/5)

    # Total coins they both have saved
    total_coins = rong_coins + neil_coins

    return total_coins