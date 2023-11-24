# Recompilation count: 0
def adam_has_100_and_wants_694637() -> int:
    # Adam has $100 and wants to spend it to open a rock stand. 
    # He can buy rocks for $5 each and sell them for $7 each. 
    # If he invests all his money in the rock stand but only sells 60% of his inventory, how much money does he lose?

    initial_money = 100
    cost_per_rock = 5
    sell_price_per_rock = 7

    # Calculate how many rocks Adam can buy with his initial money.
    rocks_bought = initial_money / cost_per_rock

    # Calculate how many rocks Adam sells (60% of his inventory).
    rocks_sold = rocks_bought * 0.6

    # Calculate how much money Adam makes from selling the rocks.
    money_made = rocks_sold * sell_price_per_rock

    # Calculate how much money Adam loses (initial investment - money made).
    money_lost = initial_money - money_made

    return round(money_lost)