# Recompilation count: 1
def artie_has_a_flower_stand_a642bb(x1, x2, x3) -> int:
    # Artie has a flower stand at the Farmers Market. He sells three kinds of flowers: marigolds, petunias and begonias. He usually sells marigolds for $2.74 per pot, petunias for $1.87 per pot and begonias for $2.12 per pot. Artie has no change today, so he has decided to round all his prices to the nearest dollar. If Artie sells'x1'pots of marigolds,'x2'pots of petunias and'x3'pots of begonias, how much will he make?
    marigolds_price = round(2.74)
    petunias_price = round(1.87)
    begonias_price = round(2.12)
    
    total_money = (x1 * marigolds_price) + (x2 * petunias_price) + (x3 * begonias_price)
    return total_money