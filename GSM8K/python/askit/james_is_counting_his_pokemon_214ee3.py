# Recompilation count: 0
def james_is_counting_his_pokemon_214ee3(x1, x2, x3, x4, x5) -> int:
    # total cards before losing/buying
    totalCards = x1 + x2 + x3
    # number of water type after losing 'x4' cards
    waterCards = x3 - x4
    # total cards after losing water type cards and buying 'x5' grass type
    totalCards = totalCards - x4 + x5
    # calculate the percentage chance of a randomly picked card being a water type
    percentageChance = round((waterCards / totalCards) * 100)
    return percentageChance