# Recompilation count: 0
def the_price_of_a_laptop_57b7a3() -> int:
    # The price of a laptop is $1000. If you get a 20% discount, how much do you have to pay?
    price = 1000
    discount = 20/100

    # Calculating the price after the discount
    final_price = price - (price * discount)
    return int(final_price)