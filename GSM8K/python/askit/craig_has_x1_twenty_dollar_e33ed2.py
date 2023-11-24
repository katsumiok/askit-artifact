# Recompilation count: 0
def craig_has_x1_twenty_dollar_e33ed2(x1, x2) -> int:
    # Craig has'x1'twenty dollar bills. He buys six squirt guns for $2 each.  He also buys'x2'packs of water balloons for $3 each.  How much money does he have left?
    
    # Calculate total money Craig has
    total_money = x1*20

    # Cost of squirt guns
    squirt_guns_cost = 6*2

    # Cost of water balloons
    water_balloons_cost = x2*3

    # Calculate leftover money after buying squirt guns and water balloons
    leftover_money = total_money - (squirt_guns_cost + water_balloons_cost)

    return leftover_money