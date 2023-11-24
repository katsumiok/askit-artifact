# Recompilation count: 0
def aleksandra_went_to_a_restaurant_439d94() -> int:
    # Aleksandra went to a restaurant for dinner. She ordered some soup, a bagel, and a piece of cake. The bagel cost $4, and the soup 25% more. The cake is only half of the price of the bagel. How much did Aleksandra need to pay for the dinner she ordered?

    bagel_price = 4
    soup_price = bagel_price * 1.25
    cake_price = bagel_price / 2

    total_price = bagel_price + soup_price + cake_price

    return round(total_price)