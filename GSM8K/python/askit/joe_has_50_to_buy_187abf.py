# Recompilation count: 0
def joe_has_50_to_buy_187abf() -> int:
    # Joe has $50 to buy an outfit for his new field trip. 
    # There is a 30% off sale at the clothing store. 
    # The shirt he picks out has a price of $25. He also picks out a pair of shorts for $35. 
    # Assuming that sales tax is included, how much money will Joe have left after the purchase?

    # calculate total price
    total_price = 25 + 35

    # calculate discount
    discount = total_price * 0.3

    # calculate final price after discount
    final_price = total_price - discount

    # calculate the money left
    money_left = 50 - final_price

    return int(money_left)