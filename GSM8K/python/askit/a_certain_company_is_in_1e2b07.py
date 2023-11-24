# Recompilation count: 0
def a_certain_company_is_in_1e2b07(x1, x2, x3) -> int:
    # price of one apple
    apple_price = 0.5
    # price of one banana
    banana_price = apple_price * 2
    # price of one orange
    orange_price = banana_price * 3

    # total price of apples, bananas and oranges
    total_price = x1*banana_price + x2*apple_price + x3*orange_price

    return total_price