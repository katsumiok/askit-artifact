# Recompilation count: 0
def colby_wants_to_buy_some_3aa06e(x1, x2, x3, x4) -> int:
    # Colby wants to buy some gumballs that cost a nickel each. If he has'x1'quarters,'x2'dimes,'x3'nickels, and'x4'pennies, how many can he buy?
    total_money = x1*25 + x2*10 + x3*5 + x4*1
    return total_money // 5