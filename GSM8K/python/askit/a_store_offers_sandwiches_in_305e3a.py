# Recompilation count: 0
def a_store_offers_sandwiches_in_305e3a(x1, x2, x3, x4, x5) -> int:
    # A store offers sandwiches in'x1' different package sizes: the first package with 'x2' sandwiches for $3, the second with 'x3' sandwiches for $6, and a third with 'x4' sandwiches, but the price is not indicated. Knowing that the prices are proportional, how much will the package with 'x5' sandwiches cost?

    # Calculating the price per sandwich for the first two packages
    price_per_sandwich_1 = 3 / x2
    price_per_sandwich_2 = 6 / x3

    # Getting the average price per sandwich 
    average_price_per_sandwich = (price_per_sandwich_1 + price_per_sandwich_2) / 2

    # Calculating the price for the package with 'x5' sandwiches
    price = average_price_per_sandwich * x5

    return round(price)