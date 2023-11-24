# Recompilation count: 0
def the_price_of_parmesan_cheese_2ffa6f(x1, x2) -> int:
    # The price of Parmesan cheese is $11 per pound. Mozzarella cheese is $6 per pound. Amor buys'x1'pounds of Parmesan and'x2'pounds of mozzarella cheese. Is she starts with $50 cash, how much money, in dollars, will she have left to buy meat?
    parmesan_cheese_price = 11 * x1
    mozzarella_cheese_price = 6 * x2
    total_cheese_price = parmesan_cheese_price + mozzarella_cheese_price
    return 50 - total_cheese_price